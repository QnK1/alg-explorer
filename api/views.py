from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from algorithms.models import Algorithm


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def heartAlg(request, pk):
    try:
        alg = Algorithm.objects.get(id=pk)
    except:
        return

    profile = request.user.profile
    