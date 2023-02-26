from django_filters import rest_framework as filters
from .models import Users


class UserFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr="contains")

    class Meta:
        model = Users
        fields = ["firstname", "lastname"]