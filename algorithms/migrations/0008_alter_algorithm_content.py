# Generated by Django 5.0.7 on 2024-08-15 13:19

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('algorithms', '0007_algorithm_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='algorithm',
            name='content',
            field=models.CharField(max_length=200, validators=[django.core.validators.RegexValidator(code='invalid_algorithm', message='Invalid alogrithm.', regex="^([RLUDFBMESrludfbxyz]{1}([2]|[']|2')? +)*([RLUDFBMESrludfbxyz]{1}([2]|[']|2')? *){1}$")]),
        ),
    ]
