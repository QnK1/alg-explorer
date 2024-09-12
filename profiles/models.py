from django.db import models
from django.contrib.auth.models import User
import uuid
# Create your models here.

class Profile(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    
    date_added = models.DateTimeField(auto_now_add=True)
    
    username = models.CharField(max_length=150)
    first_name = models.CharField(max_length=150, default="")
    last_name = models.CharField(max_length=150, null=True, blank=True)
    email = models.EmailField(max_length=150, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(null=True, blank=True, upload_to="profiles/", default="/profiles/default.png")
    
    saved_count = models.IntegerField(default=0, blank=True, null=True)
    
    
    def updateSavedCount(self):
        saved_algs = self.saved_algs.all()
        count = saved_algs.count()
        self.saved_count = count
        self.save()
    
    def __str__(self):
        return self.username