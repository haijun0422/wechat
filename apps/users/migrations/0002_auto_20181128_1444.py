# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2018-11-28 14:44
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='qq',
            field=models.IntegerField(default=0, verbose_name='QQ\u53f7\u7801'),
        ),
    ]
