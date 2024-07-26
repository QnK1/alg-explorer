from django.forms import ModelForm

from .models import Algorithm, Tag


class AlgorithmForm(ModelForm):
    class Meta:
        model = Algorithm
        fields = ['name', 'description', 'content', 'tags']