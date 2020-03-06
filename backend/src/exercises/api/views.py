
# from .serializers import ExercisesSerializer
# from exercises.models import Exercise
# #code below does the same as the code above.  
# from rest_framework.generics import (
#      ListAPIView, 
#      RetrieveAPIView,
#      DestroyAPIView,
#      UpdateAPIView,
#      CreateAPIView
#  ) 
# class ExercisesListView(ListAPIView): # API all exercises
#      queryset = Exercise.objects.all()
#      serializer_class = ExercisesSerializer
# class ExerciseDetailView(RetrieveAPIView): # API specific exercises
#      queryset = Exercise.objects.all()
#      serializer_class = ExercisesSerializer
# class ExerciseCreateView(CreateAPIView): # API create exercise
#      queryset = Exercise.objects.all()
#      serializer_class = ExercisesSerializer
# class ExerciseUpdateView(UpdateAPIView): # API update existing exercise
#      queryset = Exercise.objects.all()
#      serializer_class = ExercisesSerializer
# class ExerciseDeleteView(DestroyAPIView): # API delete exercise
#      queryset = Exercise.objects.all()
#      serializer_class = ExercisesSerializer


from exercises.models import Exercise
from .serializers import ExercisesSerializer
from rest_framework import viewsets


class ExerciseViewSet(viewsets.ModelViewSet):
    serializer_class = ExercisesSerializer
    queryset = Exercise.objects.all()
