import graphene
from graphene_django import DjangoObjectType
from mainapp import models as main_model
from users import models as user_model

class ProjectType(DjangoObjectType):
    class Meta:
        model = main_model.Project
        fields = '__all__'

class UserType(DjangoObjectType):
    class Meta:
        model = user_model.Users
        fields = '__all__'

class TodoType(DjangoObjectType):
    class Meta:
        model = main_model.Todo
        fields = '__all__'

class Query(graphene.ObjectType):
    all_projects = graphene.List(ProjectType)
    all_users = graphene.List(UserType)
    all_todo = graphene.List(TodoType)
    user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))
    todo_by_user_name = graphene.List(TodoType, name=graphene.String(required=False))
    def resolve_all_projects(self, info):
        return main_model.Project.objects.all()
    def resolve_all_users(self, info):
        return user_model.Users.objects.all()
    def resolve_all_todo(self, info):
        return main_model.Todo.objects.all()
    def resolve_user_by_id(self, info, id):
        return user_model.Users.objects.all()
    def resolve_todo_by_user_name(self, info, name=None):
        todo = main_model.Todo.objects.all()
        if name:
            todo = todo.filter(user__firstname=name)
        return todo

class UserMutation(graphene.Mutation):
    class Arguments:
        firstname = graphene.String()
        lastname = graphene.String()
        username = graphene.String()

    user = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, id, firstname, lastname, username):
        user = main_model.Users.objects.get(pk=id)
        user.firstname = firstname
        user.lastname = lastname
        user.username = username
        user.save()
        return UserMutation(user=user)

class Mutation(graphene.ObjectType):
    update_user = UserMutation.Field()


schema = graphene.Schema(query=Query)