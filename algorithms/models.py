from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator

import uuid
from profiles.models import Profile

# Create your models here.

class Algorithm(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    date_added = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(Profile, null=True, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    content = models.CharField(max_length=200, null=False, validators=[
        RegexValidator(
            regex = r"^([RLUDFBMESrludfbxyz]{1}([2]|[']|2')? +)*([RLUDFBMESrludfbxyz]{1}([2]|[']|2')? *){1}$",
            message = "Invalid alogrithm.",
            code = "invalid_algorithm",
        )
    ])
    tags = models.ManyToManyField("Tag", blank=True)
    
    cube_state = models.CharField(max_length=54, default="wwwwwwwwwyyyyyyyyyrrrrrrrrrooooooooogggggggggbbbbbbbbb")
    image = models.ImageField(null=True, blank=True, upload_to="algorithms/", default="/algorithms/default.png")
    
    def __str__(self):
        return self.name
    

class Tag(models.Model):
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)
    date_added = models.DateTimeField(auto_now_add=True)
    
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name
    
    
