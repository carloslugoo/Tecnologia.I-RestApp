from django.urls import path
from . import views
# python manage.py runserver

urlpatterns = [ 
    path('', views.PizzeriaListAPIView.as_view(),  name="pizzeria_list"), 
    path('<int:id>/', views.PizzeriaRetrieveAPIView.as_view(),  name="pizzeria_detail"),
    path('create/', views.PizzeriaCreateAPIView.as_view(), name="pizzeria_create"),
]
