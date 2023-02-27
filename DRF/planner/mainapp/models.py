from django.db import models
from users import models as users_models


class Project(models.Model):
    name = models.CharField(max_length=64)
    link = models.CharField(max_length=128, blank=True, null=True)
    user = models.ManyToManyField(users_models.Users)


class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    user = models.ForeignKey(users_models.Users, on_delete=models.CASCADE)
    text = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
