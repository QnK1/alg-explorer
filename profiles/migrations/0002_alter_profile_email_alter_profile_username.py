# Generated by Django 5.0.7 on 2024-07-23 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='email',
            field=models.EmailField(blank=True, max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='username',
            field=models.CharField(max_length=150),
        ),
    ]