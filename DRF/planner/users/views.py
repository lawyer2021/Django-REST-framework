from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from .models import Users
from mainapp.models import Todo, Project
from .serializers import UserModelSerializer, TodoModelSerializer, ProjectModelSerializer
from rest_framework.serializers import ModelSerializer
import django_filters.rest_framework
from  rest_framework.response import Response
# from rest_framework.views import APIView
from django_filters import rest_framework as filters
from rest_framework.generics import ListAPIView
from mainapp.filters import ProjectFilter, ToDoFilter
from .filters import UserFilter


class UserModelViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserModelSerializer
    filterset_fields = ('id', 'username', 'firstname', 'lastname', 'email')
    # filterset_class = UserFilter

# Работает:
    # def get_queryset(self):
    #     return Users.objects.filter(firstname__contains="Анатолий")

# Работает:
#     def get_queryset(self):
#         param = self.request.query_params.get("name")
#         print(self.request.query_params)
#         if param:
#             return Users.objects.filter(firstname__contains=param[0])
#         return super().get_queryset()


# class UserList(generics.ListCreateAPIView):
#     queryset = Users.objects.all()
#     serializer_class = UserModelSerializer
#     name = 'list_users'
#     filterset_fields = ('username', 'firstname', 'lastname',)



# class ProjectModelViewSet(ModelViewSet):
#     queryset = Project.objects.all()
#     serializer_class = ProjectModelSerializer
#     filterset_class = ProjectFilter
#
#
# class TodoModelViewSet(ModelViewSet):
#     queryset = Todo.objects.all()
#     serializer_class = TodoModelSerializer
#     filterset_class = ToDoFilter





# class myAPIView(ViewSet):
#     def list(self, request):
#         users = Users.objects.all()
#         serializer = UserModelSerializer(users, many=True)
#         return Response(serializer.data)

# class UserDjangoFilterViewSet(viewsets.ModelViewSet):
#     queryset = Users.objects.all()
#     serializer_class = UserModelSerializer
#     filterset_fields = ['username', 'firstname']

