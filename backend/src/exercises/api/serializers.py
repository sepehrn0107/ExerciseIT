from rest_framework import serializers
from exercises.models import Exercise

class ExercisesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('id', 'title', 'descriptions')


        