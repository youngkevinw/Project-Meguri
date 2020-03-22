# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-10-23 23:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meguriApp', '0007_auto_20191023_1307'),
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=255)),
                ('longitude', models.FloatField()),
                ('latitude', models.FloatField()),
                ('series', models.ManyToManyField(related_name='locations', to='meguriApp.Series')),
            ],
        ),
        migrations.AlterField(
            model_name='city',
            name='series',
            field=models.ManyToManyField(related_name='city', to='meguriApp.Series'),
        ),
    ]
