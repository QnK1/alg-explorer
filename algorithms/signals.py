from django.db.models.signals import post_save, m2m_changed
from django.dispatch import receiver
from django.core.files import File
from pathlib import Path
from django.core.exceptions import ObjectDoesNotExist
from django.db import transaction

from .models import Algorithm
from profiles.models import Profile
from .alg_image_gen.make_image import getAlgData, reverseAlg


@receiver(post_save, sender=Algorithm)
def saveAlgData(sender, instance, created, **kwargs):
    if created:
        CURR_DIR = Path(__file__).resolve().parent
        
        algorithm = instance
        scramble = instance.scramble
        
        p, data = getAlgData(scramble)
        
        instance.cube_state = data
        instance.save()
        
        with open(p, 'r') as file:
            image_file = File(file)
            algorithm.image.save(f"{str(algorithm.id)}.svg", image_file, True)


@receiver(m2m_changed, sender=Algorithm.users_hearts.through)
def algHeartsChanged(sender, instance, **kwargs):
    instance.updateHeartCount()
    

@receiver(m2m_changed, sender=Algorithm.users_saved.through)
def algsLearnedchanged(sender, instance, action, reverse, model, pk_set, **kwargs):
    instance.updateSavedCount()
    
    for pk in pk_set:
        try:
            profile = Profile.objects.get(id=pk)
            profile.updateSavedCount()
        except ObjectDoesNotExist:
            pass
            