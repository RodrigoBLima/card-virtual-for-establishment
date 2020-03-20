from rest_framework import viewsets

from .models import Establishment

from .serializers import EstablishmentSerializer

class EstablishmentViewSet(viewsets.ModelViewSet):
    model = Establishment
    queryset = Establishment.objects.all()
    serializer_class = EstablishmentSerializer