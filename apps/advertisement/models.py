# encoding=utf-8
from __future__ import unicode_literals

from django.db import models
from db.base_model import BaseModel


class Banner(BaseModel):
    name = models.CharField(max_length=50, verbose_name=u'名称')
    image = models.ImageField(upload_to='ad/index', verbose_name=u'路径')
    url = models.CharField(max_length=100, verbose_name=u'地址')

    class Meta:
        db_table = 'wh_banner'
        verbose_name = u'首页轮播'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class AdImage(BaseModel):
    name = models.CharField(max_length=50, verbose_name=u'名称')
    image = models.ImageField(upload_to='ad/index', verbose_name=u'路径')
    url = models.CharField(max_length=100, verbose_name=u'地址')

    class Meta:
        db_table = 'wh_ad'
        verbose_name = u'广告'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name
