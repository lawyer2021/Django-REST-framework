from django.test import TestCase
import json
from mixer.backend.django import mixer
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from django.contrib.auth.models import User
from .models import Users
from .views import UserModelViewSet
import mainapp.models
from mixer.backend.django import mixer


class TestUserViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users')
        view = UserModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_guest(self):
        factory = APIRequestFactory()
        request = factory.post('/api/users', {
            'id': '9edc0992-5b80-4305-9a8f-5ddc03dc5934',
            'username': 'hacker',
            'firstname': 'mister',
            'lastname': 'X',
            'email': 'for_x@mail.ru'
        })
        view = UserModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_admin(self):
        factory = APIRequestFactory()
        request = factory.post('/api/users', {
            'id': '9edc0992-5b80-4305-9a8f-5ddc03dc5934',
            'username': 'hacker',
            'firstname': 'mister',
            'lastname': 'X',
            'email': 'for_x@mail.ru'
        })
        admin = User.objects.create_superuser('admin', 'q@mail.ru', 'admin')
        force_authenticate(request, admin)
        view = UserModelViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_detail(self):
        # user = Users.objects.create(username='chief', firstname='Genry', lastname='Padva', email='padva@gmail.com')
        user = mixer.blend(Users)
        client = APIClient()
        response = client.get(f'/api/users/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_guest(self):
        # user = Users.objects.create(username='chief1', firstname='Genry1', lastname='Padva1', email='padva1@gmail.com')
        user = mixer.blend(Users)
        client = APIClient()
        response = client.put(f'/api/users/{user.id}/',
                              {'username': 'chief', 'firstname': 'Obama', 'lastname': 'Padva1',
                               'email': 'padva2@gmail.com'})
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_edit_admin(self):
        # user = Users.objects.create(username='chief1', firstname='Genry1', lastname='Padva1', email='padva1@gmail.com')
        user = mixer.blend(Users)
        client = APIClient()
        admin = User.objects.create_superuser('admin', 'q@mail.ru', 'admin')
        client.login(username='admin', password='admin')
        response = client.put(f'/api/users/{user.id}/', {
            'username': 'chief',
            'firstname': 'Obama',
            'lastname': 'Padva1',
            'email': 'padva2@gmail.com'
        })
        user = Users.objects.get(pk=user.id)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(user.firstname, 'Obama')
        self.assertEqual(user.lastname, 'Padva1')
        self.assertEqual(user.email, 'padva2@gmail.com')
        client.logout()


class TestMath(APISimpleTestCase):
    def test_sqrt(self):
        import math
        self.assertEqual(math.sqrt(4), 2)


class TestTodoViewSet(APITestCase):
    def test_get_list(self):
        response = self.client.get('/api/todo/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_edit_project_admin(self):
        # user = Users.objects.create(username='chief1', firstname='Genry1', lastname='Padva1', email='padva1@gmail.com')
        user = mixer.blend(Users)
        project = mainapp.models.Project.objects.create(name='test project', link='test link')
        project.user.add(user)
        project.save()
        # project = mixer.blend(mainapp.models.Project)
        admin = User.objects.create_superuser('admin', 'q@mail.ru', 'admin')
        self.client.login(username='admin', password='admin')
        response = self.client.put(f'/api/projects/{project.id}/', {
            'name': 'project description',
            'link': 'link',
            'user': user.id
        })
        # print(response.json())
        project = mainapp.models.Project.objects.get(pk=project.id)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(project.name, 'project description')
        self.assertEqual(project.link, 'link')
        self.client.logout()
