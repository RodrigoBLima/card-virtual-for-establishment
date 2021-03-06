from rest_framework import viewsets, response, status

from .models import Establishment

from .serializers import EstablishmentSerializer

class EstablishmentViewSet(viewsets.ModelViewSet):
    model = Establishment
    serializer_class = EstablishmentSerializer


    @decorators.action(detail=False, methods=['get'])
    def me(self, request, pk=None):
        return response.Response(self.serializer_class(request.user, context={'request': request}).data)


    def create(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        print('***************')
        print(request.data)
        print('***************')
        user.set_password(serializer.validated_data.get('password'))
        user.save()
        headers = self.get_success_headers(serializer.data)

        return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)









