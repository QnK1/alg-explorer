from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from algorithms.models import Algorithm


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def heartAlg(request, pk):
    try:
        alg = Algorithm.objects.get(id=pk)
    except:
        return Response({
        "errors" : "Invalid ID.",
    })

    profile = request.user.profile
    
    if profile in alg.users_hearts.all():
        return Response({
            "errors" : "Alg already hearted by user.",
        })
    else:
        alg.users_hearts.add(profile)
        return Response({
            "errors" : "None.",
        })


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def unheartAlg(request, pk):
    try:
        alg = Algorithm.objects.get(id=pk)
    except:
        return Response({
        "errors" : "Invalid ID.",
    })
        
    profile = request.user.profile
    
    if profile in alg.users_hearts.all():
        alg.users_hearts.remove(profile)
        return Response({
            "errors" : "None.",
        })
    else:
        return Response({
            "errors" : "Alg not previously hearted by user.",
        })