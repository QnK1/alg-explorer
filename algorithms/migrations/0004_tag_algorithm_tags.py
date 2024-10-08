# Generated by Django 5.0.7 on 2024-07-23 17:17

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('algorithms', '0003_algorithm_owner'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, unique=True)),
                ('date_added', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.AddField(
            model_name='algorithm',
            name='tags',
            field=models.ManyToManyField(blank=True, to='algorithms.tag'),
        ),
    ]
