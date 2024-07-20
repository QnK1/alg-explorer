from django.forms import ModelForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email','password1', 'password2']
        labels = {
            'username' : 'Username',
            'email' : 'E-mail',
            'password1' : 'Password',
            'password2' : 'Repeat password',
        }