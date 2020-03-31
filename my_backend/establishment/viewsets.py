from rest_framework import viewsets

from .models import Establishment

from .serializers import EstablishmentSerializer

from rest_framework.permissions import IsAuthenticated  
from rest_framework.response import Response


class EstablishmentViewSet(viewsets.ModelViewSet):
    model = Establishment
    queryset = Establishment.objects.all()
    serializer_class = EstablishmentSerializer

    # def get(self, request):
    #     content = {'message': 'Hello, World!'}
    #     return Response(content)
