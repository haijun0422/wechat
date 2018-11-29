# -*- encoding: utf-8 -*-
# @Time    : 2018/11/27 23:20
# @Author  : navy_yu
# @Email   : haijun0422@126.com
# @File    : urls.py
# @Software: PyCharm
from django.conf.urls import url
from wechat import views

urlpatterns = [
    url(r'^$', views.index, name='index')
]
