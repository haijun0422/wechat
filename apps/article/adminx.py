# -*- encoding: utf-8 -*-
# @Time    : 2018/11/26 20:56
# @Author  : navy_yu
# @Email   : haijun0422@126.com
# @File    : adminx.py
# @Software: PyCharm
from .models import Article, ArticleCategory
import xadmin


class ArticleCategoryAdmin(object):
    list_display = ['id', 'name', 'add_time']


class ArticleAdmin(object):
    list_display = ['id', 'title', 'category', 'is_check', 'add_time']


xadmin.site.register(ArticleCategory, ArticleCategoryAdmin)
xadmin.site.register(Article, ArticleAdmin)
