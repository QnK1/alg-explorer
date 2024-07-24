from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.urls import reverse

from .utils import getAlgsByTag, searchAlgs, paginateAlgs
from .models import Algorithm

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
    
    curr_url = reverse('my-algs')
    
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
