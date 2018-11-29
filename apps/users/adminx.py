# -*- encoding: utf-8 -*-
# @Time    : 2018/11/26 20:43
# @Author  : navy_yu
# @Email   : haijun0422@126.com
# @File    : xadmin.py
# @Software: PyCharm
from xadmin import views
import xadmin


class BaseSetting(object):
    enable_themes = True  # 主题功能
    use_bootswatch = True


class GlobalSettings(object):
    site_title = "微信公众号导航平台"
    site_footer = "微信公众号导航平台"
    menu_style = "accordion"  # 菜单折叠功能


xadmin.site.register(views.CommAdminView, GlobalSettings)  # 后台title和footer的显示
xadmin.site.register(views.BaseAdminView, BaseSetting)  # 主题功能
