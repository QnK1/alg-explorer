# Generated by Django 5.0.7 on 2024-09-25 16:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('algorithms', '0027_alter_algorithm_description'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='algorithm',
            options={'ordering': ['heart_count', '-date_added']},
        ),
    ]
