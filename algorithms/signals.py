from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.core.files import File
from pathlib import Path

from .models import Algorithm
from .alg_image_gen.make_image import makeImageForAlg, reverseAlg


@receiver(post_save, sender=Algorithm)
def algorithmCreated(sender, instance, created, **kwargs):
    if created:
        CURR_DIR = Path(__file__).resolve().parent
        
        algorithm = instance
        content = instance.content
        target = reverseAlg(content)
        
        p = makeImageForAlg(target)
        
        with open(p, 'r') as file:
            image_file = File(file)
            algorithm.image.save(f"{str(algorithm.id)}.svg", image_file, True)