# -*- encoding: utf-8 -*-
# @Time    : 2018/11/25 23:26
# @Author  : navy_yu
# @Email   : haijun0422@126.com
# @File    : adminx.py
# @Software: PyCharm

import xadmin


from .models import Profession, Area, PublicNumber


class ProfessionAdmin(object):
    list_display = ['id', 'name', 'status', 'add_time']


class AreaAdmin(object):
    list_display = ['id', 'name', 'status', 'add_time']


class PublicNumberAdmin(object):
    list_display = ['id', 'name', 'profession', 'wechat_number', 'is_check', 'add_time']


xadmin.site.register(Profession, ProfessionAdmin)
xadmin.site.register(Area, AreaAdmin)
xadmin.site.register(PublicNumber, PublicNumberAdmin)
