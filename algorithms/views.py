from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from django.core.exceptions import ObjectDoesNotExist
from django.contrib import messages
from django.contrib.auth import login

from .utils import getAlgsByTag, searchAlgs, paginateAlgs
from .models import Algorithm, Tag
from .forms import AlgorithmForm
from profiles.forms import CustomUserCreationForm

# Create your views here.

def getAlgsMain(request):
    if not request.user.is_authenticated:
        if request.method == "POST":
            form = CustomUserCreationForm(request.POST)
            if form.is_valid():
                login(request, form.save())
                messages.success(request, "User account was created!")
                return redirect("algs-main")
            else:
                messages.error(request, "Registration failed")
                        
        else:
            form = CustomUserCreationForm()
            
        search_url = reverse('explore-algs')
        
        context = {
            'form' : form,
            'curr_url' : search_url,
            'alltags' : Tag.objects.all(),
        }
        return render(request, 'algorithms/home.html', context)
    else:
        search_url = reverse('explore-algs')
        
        my_solves = request.user.profile.algorithm_set.order_by('-date_added')
        solves_count = my_solves.count()
        my_solves_showcase = my_solves[:min(2, solves_count)]
        
        my_saved = request.user.profile.saved_algs.all()
        saved_count = my_saved.count()
        my_saved_showcase = my_saved[:min(3, saved_count)]
        
        trending_solves = Algorithm.objects.all()
        trending_count = trending_solves.count()
        trending_showcase = trending_solves[:min(4, trending_count)]
        
        context = {
            'curr_url' : search_url,
            'alltags' : Tag.objects.all(),
            'my_solves_showcase' : my_solves_showcase,
            'my_saved_showcase' : my_saved_showcase,
            'trending_showcase' : trending_showcase,
        }
        return render(request, 'algorithms/home_login.html', context)


def getExplore(request):
    allAlgs = Algorithm.objects.all()
    
    algs, tags_query = getAlgsByTag(request, allAlgs)
    algs, search_query = searchAlgs(algs, request)
    algs, custom_range, last_page = paginateAlgs(request, algs)
    
    tags_url = f'&tags={tags_query}' if tags_query != '' else ''
    search_url = f'&search_query={search_query}' if search_query != '' else ''
    curr_queries = tags_url + search_url
    
    curr_url = reverse('explore-algs')
    
    
    curr_page = int(request.GET.get('page')) if request.GET.get('page') is not None else 1
    context = {
            'algs' : algs,
            'search_query' : search_query,
            'tags_query' : tags_query,
            'custom_range' : custom_range,
            'curr_queries' : curr_queries,
            'curr_url' : curr_url,
            'curr_page' : curr_page,
            'last_page' : last_page,
            'next_page' : curr_page + 1,
            'prev_page' : curr_page - 1,
            'alltags' : Tag.objects.all(),
    }
    return render(request, 'algorithms/explore.html', context)


@login_required(login_url='login')
def getMyAlgs(request):
    myAlgs = Algorithm.objects.filter(owner=request.user.profile)
    
    algs, tags_query = getAlgsByTag(request, myAlgs)
    algs, search_query = searchAlgs(algs, request)
    algs, custom_range, last_page = paginateAlgs(request, algs)
    
    # this makes search work together with pagination
    tags_url = f'&tags={tags_query}' if tags_query != '' else ''
    search_url = f'&search_query={search_query}' if search_query != '' else ''
    curr_queries = tags_url + search_url
    
    curr_url = reverse('explore-algs')
    
    curr_page = int(request.GET.get('page')) if request.GET.get('page') is not None else 1
    context = {
        'algs' : algs,
        'search_query' : search_query,
        'tags_query' : tags_query,
        'custom_range' : custom_range,
        'curr_queries' : curr_queries,
        'curr_url' : curr_url,
        'curr_page' : curr_page,
        'last_page' : last_page,
        'next_page' : curr_page + 1,
        'prev_page' : curr_page - 1,
        'alltags' : Tag.objects.all(),
    }
    return render(request, 'algorithms/my_solves.html', context)


@login_required(login_url='login')
def addAlg(request):
    profile = request.user.profile
    form = AlgorithmForm()
    
    if request.method == 'POST':
        form = AlgorithmForm(request.POST)
        if form.is_valid():
            alg = form.save(commit=False)
            alg.owner = profile
            
            alg.save()
            form.save_m2m()
            
            return redirect('my-algs')
    
    allTags = Tag.objects.all()
    context = {
        'form' : form,
        'alltags' : Tag.objects.all(),
    }
    return render(request, "algorithms/alg_form.html", context)


@login_required(login_url='login')
def updateAlg(request, pk):
    profile = request.user.profile
    
    try:
        alg = profile.algorithm_set.get(id=pk)
    except ObjectDoesNotExist:
        return redirect('algs-main')
    
    form = AlgorithmForm(instance=alg)
    
    if request.method == "POST":
        form = AlgorithmForm(request.POST, instance=alg)
        if form.is_valid():
            alg = form.save()
            return redirect('my-algs')
    
    allTags = Tag.objects.all()
    context = {'form' : form, 'alg' : alg, 'alltags' : Tag.objects.all(),}
    return render(request, 'algorithms/alg_form.html', context)


@login_required(login_url='login')
def deleteAlg(request, pk):
    profile = request.user.profile

    try:
        alg = profile.algorithm_set.get(id=pk)
    except ObjectDoesNotExist:
        return redirect('algs-main')
    
    if request.method == "POST":
        alg.delete()
        return redirect('my-algs')

    context = {'alg' : alg, 'alltags' : Tag.objects.all(),}
    
    return render(request, 'algorithms/delete_alg.html', context)


def getAlg(request, pk):
    try:
        alg = Algorithm.objects.get(id=pk)
    except ObjectDoesNotExist:
        return redirect('algs-main')
    
    curr_url = reverse('explore-algs')
    
    context = {'alg' : alg, 'curr_url' : curr_url, 'alltags' : Tag.objects.all(),}
    return render(request, 'algorithms/alg.html', context)