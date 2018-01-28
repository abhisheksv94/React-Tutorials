from django.contrib import admin
from django.conf.urls import url

urlpatterns = [
    url(r'^$','band.views.all_bands'),
    url(r'(?P<band_id>\d+)/$','band.views.band'),
]