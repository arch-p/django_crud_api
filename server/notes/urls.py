from django.urls import path,include
from rest_framework import routers
from .views import NotesModelViewSet

router = routers.DefaultRouter()
router.register('notes',NotesModelViewSet)

urlpatterns = router.urls