from django.shortcuts import render, redirect
from .models import Menu
from django.http import JsonResponse
from django.core import serializers
from django import forms


class MenuForm(forms.ModelForm):
  class Meta:
    model = Menu
    fields = ['title', 'price']


def get_menus_api(request):
  menus = Menu.objects.all()
  # print(menus)
  data = serializers.serialize('json', menus)
  print(data)
  return JsonResponse({'data': data})


def get_create_menus(request):
  return render(request, 'create_menus.html')

def post_menus(request):
  if request.method == 'POST':
    form = MenuForm(request.POST)
    if form.is_valid():
      new_menu = form.save()
      return redirect('/', locals())
    else:
      return redirect('/create_menus')


