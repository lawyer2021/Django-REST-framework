from rest_framework.serializers import HyperlinkedModelSerializer
from rest_framework import serializers
from .models import Users
from mainapp.models import Project, Todo


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'
        # fields = ('firstname', 'lastname')


class TodoModelSerializer(HyperlinkedModelSerializer):
    user = UserModelSerializer()

    class Meta:
        model = Todo
        fields = '__all__'


class ProjectModelSerializer(HyperlinkedModelSerializer):
    user = UserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'
