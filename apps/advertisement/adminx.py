# -*- encoding: utf-8 -*-
# @Time    : 2018/11/26 22:46
# @Author  : navy_yu
# @Email   : haijun0422@126.com
# @File    : adminx.py
# @Software: PyCharm

from models import Banner, AdImage
import xadmin


class BannerAdmin(object):
    list_display = ['id', 'name', 'add_time', 'update_time', 'is_delete']


class AdImageAdmin(object):
    list_display = ['id', 'name', 'add_time', 'update_time', 'is_delete']


xadmin.site.register(Banner, BannerAdmin)
xadmin.site.register(AdImage, AdImageAdmin)
