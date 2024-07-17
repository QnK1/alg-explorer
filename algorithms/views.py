from django.shortcuts import render

# Create your views here.

def getAlgsMain(request):
    
    context = {}
    return render(request, 'algorithms/index.html', context)