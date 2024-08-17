from django.urls import path

from . import views

urlpatterns = [
    path("heart-alg/<str:pk>/", views.heartAlg),
    path("learned-alg/<str:pk>/", views.markAlgAsLearned),
]