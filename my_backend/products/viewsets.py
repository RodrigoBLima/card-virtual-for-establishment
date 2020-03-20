from rest_framework import viewsets

from .models import Product

from .serializers import ProductSerializer

from django_filters.rest_framework import DjangoFilterBackend


class ProductsViewSet(viewsets.ModelViewSet):
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['establishment_id']