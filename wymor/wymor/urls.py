"""wymor URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from mainapp.views import get_index, get_signup, post_signup, post_logout, post_login
from menu.views import get_menus_api, get_create_menus, post_menus




urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/menus$', get_menus_api),
    url(r'^signup$',get_signup),
    url(r'^signup/post$', post_signup),
    url(r'^login/post', post_login),
    url(r'^logout/post$', post_logout),
    url(r'^menus/create$', get_create_menus),
    url(r'^menus/post', post_menus),
    url(r'^', get_index),
]





















