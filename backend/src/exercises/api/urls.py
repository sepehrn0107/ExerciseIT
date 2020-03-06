from .views import ExerciseViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ExerciseViewSet)
urlpatterns = router.urls


# from django.urls import path, include
# from .views import (
#      ExercisesListView,
#      ExerciseDetailView,
#      ExerciseUpdateView,
#      ExerciseDeleteView
#  ) 

# urlpatterns = [
#     path('', ExercisesListView.as_view()),
#     path('<pk>', ExerciseDetailView.as_view()),
#     path('<pk>/update/', ExerciseUpdateView.as_view()),
#     path('<pk>/delete', ExerciseDeleteView.as_view())
# ]




