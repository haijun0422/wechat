# -*- coding: utf-8 -*-
# @Time    : 2018/11/26 20:33
# @Author  : navy_yu
# @Email   : haijun0422@126.com
# @File    : base_model.py
# @Software: PyCharm

from django.db import models


class BaseModel(models.Model):
    add_time = models.DateTimeField(auto_now_add=True, verbose_name='添加时间')
    update_time = models.DateTimeField(auto_now=True, verbose_name='更新时间')
    is_delete = models.BooleanField(default=False)

    class Meta:
        # 说明是基类
        abstract = True
