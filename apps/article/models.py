# encoding=utf-8
from __future__ import unicode_literals

from django.db import models
from db.base_model import BaseModel
from tinymce.models import HTMLField


class ArticleCategory(BaseModel):
    '''文章分类'''
    name = models.CharField(max_length=50, verbose_name=u'名称')
    discriprion = models.TextField(verbose_name=u'描述')
    status = models.BooleanField(default=False, verbose_name=u'状态')
    sequence = models.IntegerField(verbose_name=u'排序')

    class Meta:
        db_table = 'wh_atriclecategory'
        verbose_name = u'文章分类'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Article(BaseModel):
    '''文章'''
    category = models.ForeignKey(ArticleCategory, verbose_name=u'分类', on_delete=models.CASCADE)
    title = models.CharField(max_length=50, verbose_name=u'标题')
    keywords = models.CharField(max_length=100, verbose_name=u'关键词')
    content = HTMLField(verbose_name=u'内容')
    is_recommend = models.BooleanField(default=False, verbose_name=u'推荐')
    is_check = models.BooleanField(default=False, verbose_name=u'是否审核')

    class Meta:
        db_table = 'wh_article'
        verbose_name = u'文章'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.title
