"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from establishment.viewsets import EstablishmentViewSet, login
from products.viewsets import ProductsViewSet
from clients.viewsets import ClientsViewSet
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token  # <-- Here

from .views import index  

router = routers.DefaultRouter()

router.register(r'establishment', EstablishmentViewSet)
router.register(r'products', ProductsViewSet)
router.register(r'clients', ClientsViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'api/v1/', include(router.urls)),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),  # <-- And here
    path('api/login', login)

]
