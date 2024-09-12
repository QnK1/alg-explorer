from django.forms import ModelForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

from .models import Profile

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name' ,'email', 'password1', 'password2']
        labels = {
            'username' : 'Username',
            'email' : 'E-mail',
            'password1' : 'Password',
            'password2' : 'Repeat password',
        }
    
    def __init__(self, *args, **kwargs):
        super(UserCreationForm, self).__init__(*args, **kwargs)

        for fieldname in ['username', 'password1', 'password2']:
            self.fields[fieldname].help_text = None
        
        self.fields['username'].widget.attrs.update({'autofocus': False})
        
        self.fields['username'].widget.attrs.update({'autocomplete': 'username'})
        self.fields['first_name'].widget.attrs.update({'autocomplete': 'given-name'})
        self.fields['last_name'].widget.attrs.update({'autocomplete': 'family-name'})
        self.fields['email'].widget.attrs.update({'autocomplete': 'email'})
        
        self.fields['username'].widget.attrs.update({'placeholder': 'username'})
        self.fields['first_name'].widget.attrs.update({'placeholder': 'name'})
        self.fields['last_name'].widget.attrs.update({'placeholder': 'surname'})
        self.fields['email'].widget.attrs.update({'placeholder': 'e-mail'})
        self.fields['password1'].widget.attrs.update({'placeholder': 'password'})
        self.fields['password2'].widget.attrs.update({'placeholder': 'repeat password'})


class ProfileForm(ModelForm):
    class Meta:
        model = Profile
        fields = ['image', 'username', 'email', 'description']