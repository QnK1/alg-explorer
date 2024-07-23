from django.core.paginator import Paginator, PageNotAnInteger, EmptyPage
from django.db.models import Q
from django.core.exceptions import ValidationError

from .models import Algorithm, Tag

def getAlgsByTag(request, algs):
    if not request.GET.get('tags'):
        return algs, ''
    else:
        tags_string = request.GET.get('tags')
        tag_names = tags_string.split(',')
        tags = Tag.objects.filter(name__in=tag_names)
        
        try:
            algs = algs.filter(tags__in=tags)
        except ValidationError:
            return algs, ''
        
        return algs, tags_string


def searchAlgs(filtered_algs, request):
    search_query = ''
    
    if request.GET.get('search_query'):
        search_query = request.GET.get('search_query')
    
    algs = filtered_algs.distinct().filter(Q(name__icontains=search_query) | Q(description__icontains=search_query))
    
    return algs, search_query


def paginateAlgs(request, algs):
    results = 1
    page = request.GET.get('page')
    paginator = Paginator(algs, results)
    
    try:
        algs = paginator.page(page)
    except PageNotAnInteger:
        page = 1
        algs = paginator.page(page)
    except EmptyPage:
        page = paginator.num_pages
        algs = paginator.page(page)
    
    page = int(page)
    
    
    left_index = max(1, page - 4)
    right_index = min(paginator.num_pages, page + 4)
    custom_range = range(left_index, right_index + 1)
    
    return algs, custom_range
        