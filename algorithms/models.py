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
    # content has to be a valid algorithm, for example "R U R'U'"
    content = models.CharField(max_length=200, null=False, validators=[
        RegexValidator(
            regex = r"^([RLUDFBMESxyz]{1}[']? *)+$",
            message = "Invalid alogrithm.",
            code = "invalid_algorithm",
        )
    ])
    
    # tags = models.ManyToManyField("Tag", blank=True)
    # raise ValidationError({'volumn': ('Volumn cannot be bigger than storage quantity')})
    
    def __str__(self):
        return self.name
