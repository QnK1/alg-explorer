from django.shortcuts import render

# Create your views here.

def getAlgsMain(request):
    
    context = {'title' : 'Welcome'}
    return render(request, 'algorithms/algs_main.html', context)


def getExplore(request):
    
    context = {'title' : 'Explore'}
    return render(request, 'algorithms/explore.html', context)


def getMyAlgs(request):
    
    context = {'title' : 'My Algorithms'}
    return render(request, 'algorithms/my_algs.html', context)