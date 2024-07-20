from django.db import models
from django.contrib.auth.models import User

import uuid

# Create your models here.

class Profile(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    
    date_added = models.DateTimeField(auto_now_add=True)
    
    username = models.CharField(max_length=200)
    email = models.EmailField(max_length=200, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    
    
    def __str__(self):
        return self.username