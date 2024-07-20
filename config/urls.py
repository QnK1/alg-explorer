from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

from algorithms.views import getAlgsMain

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('', getAlgsMain),
    path('algs/', include('algorithms.urls')),
    path('users/', include('profiles.urls')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.MEDIA_ROOT)