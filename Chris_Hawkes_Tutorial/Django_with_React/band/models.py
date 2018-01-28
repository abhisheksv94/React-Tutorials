from django.db import models
import django.utils.timezone

class Band(models.Model):
    name = models.CharField(max_length=128,null=False,blank=False,unique=True)
    date_added=models.DateField(default=django.utils.timezone.now())
    image=models.CharField(max_length=255,null=True,blank=True)
    bio=models.TextField(max_length=5000,null=True,blank=True)