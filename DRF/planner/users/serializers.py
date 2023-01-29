from rest_framework.serializers import ModelSerializer
from django_filters import rest_framework as filters
from .models import Users
from mainapp.models import Project, Todo


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'


class UserFilter(filters.FilterSet):
    class Meta:
        model = Users
        fields = '__all__'


class TodoModelSerializer(ModelSerializer):
    user = UserModelSerializer()

    class Meta:
        model = Todo
        fields = '__all__'


class ProjectModelSerializer(ModelSerializer):
    user = UserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'
