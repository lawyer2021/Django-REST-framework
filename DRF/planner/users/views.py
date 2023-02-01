from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet
from .filters import UserFilter
from .models import Users
from .serializers import UserModelSerializer


class UserModelViewSet(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.ListModelMixin, GenericViewSet):
    queryset = Users.objects.all()
    serializer_class = UserModelSerializer
    filterset_class = UserFilter

# class UserModelViewSet(ModelViewSet):
#     queryset = Users.objects.all()
#     serializer_class = UserModelSerializer
#     # filterset_fields = ('id', 'username', 'firstname', 'lastname', 'email')
#     filterset_class = UserFilter

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


# class MyAPIView(ViewSet):
#     def list(self, request):
#         users = Users.objects.all()
#         serializer = UserModelSerializer(users, many=True)
#         return Response(serializer.data)
#
#     def retrieve(self, request):
#         users = Users.objects.all()
#         serializer = UserModelSerializer(users, many=True)
#         return Response(serializer.data)


# class UserModelViewSet(viewsets.ModelViewSet):
#     queryset = Users.objects.all()
#     serializer_class = UserModelSerializer
#     # filterset_fields = ['username', 'firstname']
#     filterset_class = UserFilter
