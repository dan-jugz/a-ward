from django.test import TestCase
from .models import categories,technologies, Profile, Project
from django.contrib.auth.models import User
import datetime as dt

# Create your tests here.
class categoriesTestCase(TestCase):
    def setUp(self):
        self.Test = categories(categories='Test')

    def test_instance(self):
        self.assertTrue(isinstance(self.Test,categories))

    def tearDown(self):
        categories.objects.all().delete()

    def test_save_method(self):
        self.Test.save_category()
        category = categories.objects.all()
        self.assertTrue(len(category)>0)

    def test_delete_method(self):
        self.Test.delete_category('Test')
        category = categories.objects.all()
        self.assertTrue(len(category)==0)
