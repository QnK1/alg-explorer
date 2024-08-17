from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from algorithms.models import Algorithm


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def heartAlg(request, pk):
    profile = request.user.profile
    
    try:
        alg = Algorithm.objects.get(id=pk)
    except:
        return Response({
        "errors" : "Invalid ID.",
    })

    if 'heart' not in request.data or request.data['heart'] not in {'yes', 'no'}:
        return Response({
            "errors" : "Invalid PUT data.",
        })
    
    if request.data['heart'] == "yes" and profile not in alg.users_hearts.all():
        alg.users_hearts.add(profile)
    elif request.data['heart'] == "no" and profile in alg.users_hearts.all():
        alg.users_hearts.remove(profile)
    
    return Response({
        "errors" : "None.",
    })


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def markAlgAsLearned(request, pk):
    profile = request.user.profile
    
    try:
        alg = Algorithm.objects.get(id=pk)
    except:
        return Response({
        "errors" : "Invalid ID.",
    })

    if 'learned' not in request.data or request.data['learned'] not in {'yes', 'no'}:
        return Response({
            "errors" : "Invalid PUT data.",
        })
    
    if request.data['learned'] == "yes" and profile not in alg.users_learned.all():
        alg.users_learned.add(profile)
    elif request.data['learned'] == "no" and profile in alg.users_learned.all():
        alg.users_learned.remove(profile)
    
    return Response({
        "errors" : "None.",
    })
