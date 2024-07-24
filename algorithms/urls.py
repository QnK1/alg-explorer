from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getAlgsMain, name="algs-main"),
    path('myalgs/', views.getMyAlgs, name="my-algs"),
    path('explore/', views.getExplore, name="explore-algs"),
    # path('add-alg/', views.addAlg, name="add-alg"),
    # path('update-alg/', views.updateAlg, name='update-alg'),
    # path('delete-alg/', views.deleteAlg, name='delete-alg'),
]