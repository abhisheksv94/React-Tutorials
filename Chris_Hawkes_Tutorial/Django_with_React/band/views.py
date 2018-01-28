from django.shortcuts import render

def all_bands(request):
    return render(request,'band.html')


def band(request, band_id):
    return render(request,'band.html')