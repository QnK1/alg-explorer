from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator
from pathlib import Path
from re import M

import uuid
from profiles.models import Profile

# Create your models here.

class Algorithm(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    date_added = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(Profile, null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    scramble = models.CharField(default="", max_length=100, null=False, validators=[
        RegexValidator(
            regex = r"^([RLUDFBMESrludfbxyz]{1}([2]|[']|2')? +)*([RLUDFBMESrludfbxyz]{1}([2]|[']|2')? *){1}$",
            message = "Invalid scramble.",
            code = "invalid_scramble"
        )
    ])
    content = models.TextField(max_length=1000, null=False, validators=[
        RegexValidator(
            regex = r"^( |\n|//[^\n]*)*([RLUDFBMESrludfbxyz]{1}([2]|[']|2')?( |\n|//[^\n]*)+)*([RLUDFBMESrludfbxyz]{1}([2]|[']|2')?( |\n|//[^\n]*)*){1}$",
            message = "Invalid solve.",
            code = "invalid_solve",
            flags = M
        )
    ])
    tags = models.ManyToManyField("Tag", blank=True, related_name="algs")
    
    cube_state = models.CharField(editable=False, max_length=54, default="wwwwwwwwwyyyyyyyyyrrrrrrrrrooooooooogggggggggbbbbbbbbb")
    image = models.ImageField(editable=False, null=True, blank=True, upload_to="algorithms/", default="algorithms/default.svg")
    users_hearts = models.ManyToManyField(Profile, blank=True, related_name="hearted_algs")
    users_saved = models.ManyToManyField(Profile, blank=True, related_name="saved_algs")
    
    heart_count = models.IntegerField(default=0, blank=True, null=True)
    saved_count = models.IntegerField(default=0, blank=True, null=True)
    
    
    def updateHeartCount(self):
        users = self.users_hearts.all()
        count = users.count()
        self.heart_count = count
        self.save()
    
    
    def updateSavedCount(self):
        users = self.users_saved.all()
        count = users.count()
        self.saved_count = count
        self.save()
        
    
    def __str__(self):
        return self.name
    

class Tag(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    date_added = models.DateTimeField(auto_now_add=True)
    
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name
    
    
