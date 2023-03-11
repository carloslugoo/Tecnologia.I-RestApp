from django.urls import path
from . import views

urlpatterns = [ 
    path('', views.PizzeriaListAPIView.as_view(),  name="pizzeria_list"), 
]
