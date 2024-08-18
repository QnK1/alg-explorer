from django.db.models.signals import post_save, post_delete, m2m_changed
from django.dispatch import receiver
from django.contrib.auth.models import User

from .models import Profile



# deleting user on profile delete, try-catch to avoid error while deleting user first (infinite loop)
# done this way to avoid modifying the built-in user model
@receiver(post_delete, sender=Profile) 
def profileDeleted(sender, instance, **kwargs):
    try:
        instance.user.delete()
    except:
        pass
    

# creating a profile for created user   
@receiver(post_save, sender=User)
def userCreated(sender, instance, created, **kwargs):
    if created:
        user = instance
        Profile.objects.create(
            user = user,
            username = user.username,
            email = user.email,
        )


# updating the user on profile update to make sure they are in sync
@receiver(post_save, sender=Profile)    
def profileUpdated(sender, instance, created, **kwargs):
    if not created:
        profile = instance
        user = profile.user
        
        user.username = profile.username
        user.email = profile.email
        user.save()