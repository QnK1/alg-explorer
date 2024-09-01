from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getAlgsMain, name="algs-main"),
    path('solves/mysolves/', views.getMyAlgs, name="my-algs"),
    path('solves/explore/', views.getExplore, name="explore-algs"),
    path('solves/add/', views.addAlg, name="add-alg"),
    path('solves/update/<str:pk>/', views.updateAlg, name='update-alg'),
    path('solves/delete/<str:pk>/', views.deleteAlg, name='delete-alg'),
    path('solves/<str:pk>/', views.getAlg, name="alg"),
]