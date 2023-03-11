from django.shortcuts import render
from django.urls import path
from .models import Pizzeria
from .serializers import PizzeriaListSerializer
from rest_framework import generics


# Create your views here.
class PizzeriaListAPIView(generics.ListAPIView):
    queryset = Pizzeria.objects.all()
    serializer_class = PizzeriaListSerializer
