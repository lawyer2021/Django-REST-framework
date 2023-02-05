from django_filters import rest_framework as filters
from .models import Project, Todo


class ProjectFilter(filters.FilterSet):
    # Вариант 1:
    # name = filters.CharFilter(lookup_expr="contains")
    # class Meta:
    #     model = Project
    #     fields = ["name"]

    # Вариант 2:
    class Meta:
        model = Project
        fields = {
            'name': ['contains'],
        }


class ToDoFilter(filters.FilterSet):
    class Meta:
        model = Todo
        fields = ["project"]
