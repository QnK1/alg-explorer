from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist

from .models import User, Profile
from .forms import CustomUserCreationForm, ProfileForm

# Create your views here.

def loginUser(request):
    if request.user.is_authenticated:
        return redirect('algs-main')
    
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            login(request, form.get_user())
            messages.success(request, "User logged in successfully!")
            
            if request.GET.get('next'):
                redirect_url = request.GET.get('next')
            else:
                redirect_url = 'algs-main'
            
            return redirect(redirect_url)
        else:
            messages.error(request, "Username or password incorrect")
        
    else:
        form = AuthenticationForm()
    
    context = {'title' : 'Log In', 'form' : form}
    return render(request, "profiles/login.html", context)


def registerUser(request):
    if request.user.is_authenticated:
        return redirect('algs-main')
    
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            login(request, form.save())
            messages.success(request, "User account was created!")
            return redirect("algs-main")
        else:
            messages.error(request, "Error")
    else:
        form = CustomUserCreationForm()
    
    context = {'title' : 'Register', 'form' : form}
    return render(request, "profiles/register.html", context)


@login_required(login_url='login')
def logoutUser(request):
    logout(request)
    messages.success(request, "User logged out.")
    return redirect('login')


def getProfile(request, pk):
    try:
        profile = Profile.objects.get(id=pk)
    except ObjectDoesNotExist:
        return redirect('algs-main')
    
    context = {'profile' : profile}
    return render(request, "profiles/profile.html", context)


@login_required(login_url='login')
def getUserAccount(request):
    profile = request.user.profile
    form = ProfileForm(instance=profile)
    
    if request.method == "POST":
        form = ProfileForm(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            form.save()
    
    context = {
        'title' : 'Account', 
        'form' : form,
    }
    return render(request, 'profiles/account.html', context)