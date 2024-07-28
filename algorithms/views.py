from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.urls import reverse
from django.core.exceptions import ObjectDoesNotExist

from .utils import getAlgsByTag, searchAlgs, paginateAlgs
from .models import Algorithm
from .forms import AlgorithmForm

# Create your views here.

def getAlgsMain(request):
    
    context = {'title' : 'Welcome'}
    return render(request, 'algorithms/algs_main.html', context)


def getExplore(request):
    allAlgs = Algorithm.objects.all()
    
    algs, tags_query = getAlgsByTag(request, allAlgs)
    algs, search_query = searchAlgs(algs, request)
    algs, custom_range = paginateAlgs(request, algs)
    
    tags_url = f'&tags={tags_query}' if tags_query != '' else ''
    search_url = f'&search_query={search_query}' if search_query != '' else ''
    curr_queries = tags_url + search_url
    
    curr_url = reverse('explore-algs')
    
    context = {
            'title' : 'Explore',
            'algs' : algs,
            'search_query' : search_query,
            'tags_query' : tags_query,
            'custom_range' : custom_range,
            'curr_queries' : curr_queries,
            'curr_url' : curr_url,
            
    }
    return render(request, 'algorithms/explore.html', context)


@login_required(login_url='login')
def getMyAlgs(request):
    myAlgs = Algorithm.objects.filter(owner=request.user.profile)
    
    algs, tags_query = getAlgsByTag(request, myAlgs)
    algs, search_query = searchAlgs(algs, request)
    algs, custom_range = paginateAlgs(request, algs)
    
    # this makes search work together with pagination
    tags_url = f'&tags={tags_query}' if tags_query != '' else ''
    search_url = f'&search_query={search_query}' if search_query != '' else ''
    curr_queries = tags_url + search_url
    
    curr_url = reverse('my-algs')
    
    context = {
        'title' : 'My Algorithms',
        'algs' : algs,
        'search_query' : search_query,
        'tags_query' : tags_query,
        'custom_range' : custom_range,
        'curr_queries' : curr_queries,
        'curr_url' : curr_url,
    }
    return render(request, 'algorithms/my_algs.html', context)


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
            return redirect('my-algs')
    
    context = {'form' : form}
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
    
    context = {'form' : form, 'alg' : alg}
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

    context = {'alg' : alg}
    
    return render(request, 'algorithms/delete_alg.html', context)


def getAlg(request, pk):
    try:
        alg = Algorithm.objects.get(id=pk)
    except ObjectDoesNotExist:
        return redirect('algs-main')
    
    context = {'alg' : alg}
    return render(request, 'algorithms/alg.html', context)