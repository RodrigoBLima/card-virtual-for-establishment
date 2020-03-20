from rest_framework import viewsets

from .models import Clients

from .serializers import ClientsSerializer

from django_filters.rest_framework import DjangoFilterBackend

class ClientsViewSet(viewsets.ModelViewSet):
    model   =  Clients
    queryset = Clients.objects.all()
    serializer_class = ClientsSerializer
    filterset_fields = ['establishment_id']
