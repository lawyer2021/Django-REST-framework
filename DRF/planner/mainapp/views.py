from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .models import Project, Todo
from users.serializers import TodoModelSerializer, ProjectModelSerializer
from .filters import ProjectFilter, ToDoFilter
from rest_framework.response import Response


class ProjectPaginator(LimitOffsetPagination):
    default_limit = 10


class ProjectModelViewSet(ModelViewSet):
    # permission_classes = [IsAuthenticated]
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    filterset_class = ProjectFilter
    pagination_class = ProjectPaginator


class TodoPaginator(LimitOffsetPagination):
    default_limit = 20


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoModelSerializer
    filterset_class = ToDoFilter
    pagination_class = TodoPaginator

    def destroy(self, request, *args, **kwargs):
        instanse = self.get_object()
        serializer = TodoModelSerializer(instanse, data={"is_active": False}, context={"request": request},
                                         partial=True)
        serializer.is_valid()
        serializer.save()
        return Response(serializer.data)
