from django.shortcuts import render

# Create your views here.

def getAlgsMain(request):
    
    context = {}
    return render(request, 'algorithms/algs_main.html', context)