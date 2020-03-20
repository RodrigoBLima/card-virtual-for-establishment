from rest_framework import serializers
from .models import Clients
from establishment.models import Establishment

class ClientsSerializer(serializers.ModelSerializer):
    name_establishment = serializers.SerializerMethodField(read_only=True) 
    
    def get_name_establishment(self,obj):
        return obj.establishment_id.name_establishment

    class Meta:
        model = Clients
        fields = ('id','name_client','email','cell_phone','card_points','establishment_id','name_establishment')