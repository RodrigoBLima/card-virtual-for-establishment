from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    name_establishment = serializers.SerializerMethodField(read_only=True)

    def get_name_establishment(self, obj):
        return obj.establishment_id.name_establishment

    class Meta:
        model = Product
        fields = ('name_product', 'quant_product', 'desc_product',
                  'price_product', 'establishment_id', 'name_establishment')
