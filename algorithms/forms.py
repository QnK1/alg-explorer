from django.forms import ModelForm

from .models import Algorithm, Tag


class AlgorithmForm(ModelForm):
    class Meta:
        model = Algorithm
        fields = ['solver', 'description', 'scramble', 'content', 'tags']