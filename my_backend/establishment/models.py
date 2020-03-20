from django.db import models
from clients.models import Clients
# Create your models here.


class Establishment(models.Model):
    name_establishment  = models.CharField(max_length = 150,blank=False, verbose_name="Nome do Estabelecimento")
    cep = models.CharField(max_length=9, blank=True,verbose_name="CEP")
    endereco = models.CharField(max_length=50, verbose_name="Endereço", blank=True)
    numero = models.CharField(max_length=6, verbose_name="Número", blank=True)
    cnpj = models.CharField(max_length=15, null=True, blank=True,verbose_name="CNPJ")

    def __str__(self):
        return self.name_establishment
    