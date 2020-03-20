from rest_framework import viewsets

from .models import Product

from .serializers import ProductSerializer

# from .filtersets import ProductFilter

# from django_filters import rest_framework as filters

# from django_filters import rest_framework as filters


class ProductsViewSet(viewsets.ModelViewSet):
    model = Product
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # filter_class = ProductFilter
    # filter_backends = (filters.DjangoFilterBackend)
    # filterset_fields = ['establishment_id']
    # filter_backends = (filters.DjangoFilterBackend,)
    # filterset_fields = ('category', 'in_stock')