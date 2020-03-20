from rest_framework import viewsets

from .models import Clients

from .serializers import ClientsSerializer

# from .filt    ersets import ClientsFilter

class ClientsViewSet(viewsets.ModelViewSet):
    model   =  Clients
    queryset = Clients.objects.all()
    serializer_class = ClientsSerializer
    # filter_class = ClientsFilter
