# encoding=utf-8
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import AbstractUser
from db.base_model import BaseModel



class UserProfile(AbstractUser, BaseModel):
    '''用户信息'''
    phone = models.CharField(max_length=11, verbose_name=u'手机')

    gender = models.CharField(choices=(('1', u'男'), ('2', u'女'), ('3', '保密')), default='male', max_length=10,
                              verbose_name=u'性别')
    is_use = models.BooleanField(default=False, verbose_name=u'是否启用')
    qq = models.IntegerField(default=0, verbose_name=u'QQ号码')
    image = models.ImageField(upload_to='users', verbose_name=u'头像')

    class Meta:
        db_table = 'wh_users'
        verbose_name = u'用户信息'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.username


class Spread(BaseModel):
    user = models.ForeignKey(UserProfile, verbose_name=u'推广账号')
    link = models.CharField(max_length=100, verbose_name=u'推广链接')
    add_integral = models.IntegerField(verbose_name=u'增加积分')

    class Meta:
        db_table = 'wh_spread'
        verbose_name = u'推广'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.user
