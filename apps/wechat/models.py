# encoding=utf-8
from django.db import models
from tinymce.models import HTMLField
from db.base_model import BaseModel
# from users.models import UserProfile


class Profession(BaseModel):
    '''行业分类'''
    name = models.CharField(max_length=50, verbose_name=u'名称')
    discriprion = models.TextField(verbose_name=u'描述')
    status = models.BooleanField(default=False, verbose_name=u'状态')
    sequence = models.IntegerField(verbose_name=u'排序')

    class Meta:
        db_table = 'wh_profession'
        verbose_name = u'行业分类'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class Area(BaseModel):
    '''地区分类'''
    name = models.CharField(max_length=50, verbose_name=u'名称')
    discriprion = HTMLField(verbose_name=u'描述')
    status = models.BooleanField(default=False, verbose_name=u'状态')
    sequence = models.IntegerField(verbose_name=u'排序')

    class Meta:
        db_table = 'wh_area'
        verbose_name = u'地区分类'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name


class PublicNumber(BaseModel):
    '''公众号'''
    name = models.CharField(max_length=50, verbose_name=u'名称')
    profession = models.ForeignKey(Profession, verbose_name=u'行业', on_delete=models.CASCADE)
    area = models.ForeignKey(Area, verbose_name=u'地区', on_delete=models.CASCADE)
    user = models.ForeignKey('users.UserProfile', verbose_name=u'发布人')
    logo = models.ImageField(upload_to="public_logo/%Y/%m", verbose_name=u'微信logo', max_length=100)
    QR_code = models.ImageField(upload_to="code/%Y/%m", verbose_name=u'二维码', max_length=100)
    wechat_number = models.CharField(max_length=50, verbose_name=u'微信号')
    website = models.CharField(max_length=100, verbose_name=u'网址')
    wechat_origin_number = models.CharField(max_length=50, verbose_name=u'原始号')
    keywords = models.CharField(max_length=100, verbose_name=u'关键词')
    recommend = models.CharField(choices=((1, u'一星'), (2, u'二星'), (3, u'三星'), (4, u'四星'), (5, u'五星')), default=1,
                                 verbose_name=u'推荐指数', max_length=20)
    introduction = models.TextField(verbose_name=u'简介')
    is_check = models.BooleanField(default=False, verbose_name=u'是否审核')

    class Meta:
        db_table='wh_publicnumber'
        verbose_name = u'公众号'
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name
