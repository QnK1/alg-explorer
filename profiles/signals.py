from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.contrib.auth.models import User

from .models import Profile

@receiver(post_delete, sender=Profile) 
def profileDeleted(sender, instance, **kwargs):
    try:
        instance.user.delete()
    except:
        pass
    
    
@receiver(post_save, sender=User)
def userCreated(sender, instance, created, **kwargs):
    if created:
        user = instance
        Profile.objects.create(
            user = user,
            username = user.username,
            email = user.email,
        )


@receiver(post_save, sender=Profile)    
def profileUpdated(sender, instance, created, **kwargs):
    if not created:
        profile = instance
        user = profile.user
        
        user.username = profile.username
        user.email = profile.email
        user.save()