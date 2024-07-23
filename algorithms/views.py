from django.shortcuts import render

from .utils import getMyAlgsByTag, searchMyAlgs, paginateMyAlgs

# Create your views here.

def getAlgsMain(request):
    
    context = {'title' : 'Welcome'}
    return render(request, 'algorithms/algs_main.html', context)


def getExplore(request):
    
    context = {'title' : 'Explore'}
    return render(request, 'algorithms/explore.html', context)


def getMyAlgs(request):
    algs, tags_query = getMyAlgsByTag(request)
    algs, search_query = searchMyAlgs(algs, request)
    algs, custom_range = paginateMyAlgs(request, algs)
    
    # this makes search work together with pagination
    tags_url = f'&tags={tags_query}' if tags_query != '' else ''
    search_url = f'&search_query={search_query}' if search_query != '' else ''
    curr_url = tags_url + search_url
    
    context = {
        'title' : 'My Algorithms',
        'algs' : algs,
        'search_query' : search_query,
        'tags_query' : tags_query,
        'custom_range' : custom_range,
        'curr_url' : curr_url,
    }
    return render(request, 'algorithms/my_algs.html', context)