# Generated by Django 5.0.7 on 2024-08-31 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('algorithms', '0019_alter_algorithm_image_alter_algorithm_tags'),
    ]

    operations = [
        migrations.RenameField(
            model_name='algorithm',
            old_name='learned_count',
            new_name='saved_count',
        ),
        migrations.RenameField(
            model_name='algorithm',
            old_name='users_learned',
            new_name='users_saved',
        ),
        migrations.AlterField(
            model_name='algorithm',
            name='image',
            field=models.ImageField(blank=True, default='algorithms/default.svg', editable=False, null=True, upload_to='algorithms/'),
        ),
    ]
