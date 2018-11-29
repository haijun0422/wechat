# -*- encoding: utf-8 -*-
from django.shortcuts import render, redirect
from users.models import UserProfile
from django.core.urlresolvers import reverse
from django.views.generic import View
from django.contrib.auth import authenticate, login
import re
from users.form import LoginForm


class RegisterView(View):
    def get(self, request):
        return render(request, 'register.html')

    def post(self, request):
        username = request.POST.get('uname')
        password = request.POST.get('userpwd')
        qq = request.POST.get('qq')
        if not all([username, password, qq]):
            return render(request, 'register.html', {'errmsg': u'数据不完整'})
        if not re.match(r'^[a-z0-9]*', username):
            return render(request, 'register.html', {'errmsg': u'用户名格式不正确'})
        if not re.match(r'[0-9]', qq):
            return render(request, 'register.html', {'errmsg': u'请输入正确的QQ号码'})
        try:
            user = UserProfile.objects.get(username=username)
        except UserProfile.DoesNotExist:
            user = None
        if user:
            return render(request, 'register.html', {"errmsg": '用户名已经存在'})
        user = UserProfile.objects.create_user(username, password, qq)
        user.is_active = 1  # 预留，以后会做邮件激活
        user.save()
        return redirect(reverse('wechat:index'))


class LoginView(View):
    def get(self, request):
        '''判断是否记住用户名'''
        if 'username' in request.COOKIES:
            username = request.COOKIES.get('username')
            checked = 'checked'
        else:
            username = ''
            checked = ''
        return render(request, 'login.html', {'username': username, 'checked': checked})

    def post(self, request):
        form = LoginForm(request.POST)
        if form.is_valid():
            username = request.POST.get('userid')
            password = request.POST.get('pwd')
            if not all([username, password]):
                return render(request, 'register.html', {'errmsg': u'请输入用户名或密码'})
            user = authenticate(username=username, password=password)  # 登录校验
            if user is not None:
                if user.is_active:
                    login(request, user)
                    response = redirect(reverse('wechat:index'))
                    remember = request.POST.get('remember')
                    if remember == 'on':
                        # 记住用户名
                        response.set_cookie('username', username, max_age=7 * 24 * 3600)
                    else:
                        response.delete_cookie('username')
                    return response

                else:
                    return render(request, 'login.html', {'errmsg': u'账户未激活'})
            else:
                return render(request, 'login.html', {'errmsg': u'用户名或密码错误'})


