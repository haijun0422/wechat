# -*- encoding: utf-8 -*-
# @Time    : 2018/11/27 23:14
# @Author  : navy_yu
# @Email   : haijun0422@126.com
# @File    : urls.py
# @Software: PyCharm

from django.conf.urls import url
from users.views import RegisterView, LoginView

urlpatterns = [
    url(r'^register$', RegisterView.as_view(), name='register'),
    url(r'^login$', LoginView.as_view(), name='login')
]
