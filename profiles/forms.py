from django.forms import ModelForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

from .models import Profile

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
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
        
        self.fields['password2'].label = 'Repeat Password'


class ProfileForm(ModelForm):
    class Meta:
        model = Profile
        fields = ['image', 'username', 'email', 'description']