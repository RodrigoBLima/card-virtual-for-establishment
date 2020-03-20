from django.db import models

# Create your models here.


class Product(models.Model):
    name_product = models.CharField(max_length=80,blank=False, verbose_name="Nome do produto")
    quant_product = models.DecimalField(max_digits=10, blank=True, null=True, decimal_places=2,verbose_name="Quantidade do produto")
    desc_product = models.CharField(max_length=150,blank=False, verbose_name="Descrição do produto")
    price_product = models.DecimalField(max_digits=4, verbose_name="Custo do produto (R$)" , decimal_places=4, null=True , blank=True)    
    establishment_id   = models.ForeignKey('establishment.Establishment', on_delete=models.CASCADE,related_name='establishment_products', verbose_name="Estabelecimento produto")

    def __str__(self):
        return self.name_product

            

    
