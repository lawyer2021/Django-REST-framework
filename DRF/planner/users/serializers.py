from rest_framework.serializers import ModelSerializer
from .models import Users
from mainapp.models import Project, Todo


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = Users
        # fields = '__all__'
        exclude = ['id']

class TodoModelSerializer(ModelSerializer):
    user = UserModelSerializer()
    class Meta:
        model = Todo
        fields = '__all__'

class ProjectModelSerializer(ModelSerializer):
    user = UserModelSerializer(many=True)
    class Meta:
        model = Project
        # fields = '__all__'
        exclude = ['id']