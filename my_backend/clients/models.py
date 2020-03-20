from django.db import models
# from establishment.models import Establishment

# Create your models here.


class Clients(models.Model):
    name_client = models.CharField(
        max_length=80, blank=False, verbose_name="Nome do Cliente")
    email = models.EmailField(unique=True, verbose_name="Email do cliente")
    cell_phone = models.CharField(
        max_length=16, null=True, blank=True, verbose_name="Celular")
    card_points = models.IntegerField(
        null=True, verbose_name="Pontos na carteira")
    establishment_id = models.ForeignKey('establishment.Establishment', on_delete=models.CASCADE,
                                      related_name='establishment_client', verbose_name="Estabelecimento")

    def __str__(self):
        return self.name_client
