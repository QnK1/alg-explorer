from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist

from algorithms.models import Algorithm


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def heartAlg(request, pk):
    profile = request.user.profile
    
    try:
        alg = Algorithm.objects.get(id=pk)
    except ObjectDoesNotExist:
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
def markAlgAsSaved(request, pk):
    profile = request.user.profile
    
    try:
        alg = Algorithm.objects.get(id=pk)
    except ObjectDoesNotExist:
        return Response({
        "errors" : "Invalid ID.",
    })

    if 'saved' not in request.data or request.data['saved'] not in {'yes', 'no'}:
        return Response({
            "errors" : "Invalid PUT data.",
        })
    
    if request.data['saved'] == "yes" and profile not in alg.users_saved.all():
        alg.users_saved.add(profile)
    elif request.data['saved'] == "no" and profile in alg.users_saved.all():
        alg.users_saved.remove(profile)
    
    return Response({
        "errors" : "None.",
    })
