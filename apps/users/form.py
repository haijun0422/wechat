# -*- coding: utf-8 -*-
# @Time    : 18-11-29 下午11:49
# @Author  : Nick
# @Email   : haijun0422@126.com
# @File    : form.py
# @Software: PyCharm

from django import forms


class LoginForm(forms.Form):
    userid = forms.CharField(required=True)
    pwd = forms.CharField(required=True, min_length=6)
