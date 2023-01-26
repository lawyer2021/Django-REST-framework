from rest_framework.viewsets import ModelViewSet
from .models import Users
from mainapp.models import Todo, Project
from .serializers import UserModelSerializer, TodoModelSerializer, ProjectModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UserModelSerializer


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
