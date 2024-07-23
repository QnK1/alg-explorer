from django.contrib import admin

from .models import Algorithm, Tag

# Register your models here.

admin.site.register(Algorithm)
admin.site.register(Tag)