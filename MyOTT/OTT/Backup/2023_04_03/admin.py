from django.contrib import admin
from OTT import models

# Register your models here.
admin.site.register(models.Role)
admin.site.register(models.UserDetail)
admin.site.register(models.Category)
admin.site.register(models.Genre)
admin.site.register(models.Cast)
admin.site.register(models.Movie)
admin.site.register(models.Series)
admin.site.register(models.Episode)
admin.site.register(models.DistributorManagment)
admin.site.register(models.AdvertisorManagment)
admin.site.register(models.Advertise)
admin.site.register(models.LiveStream)
admin.site.register(models.slideBanner)
admin.site.register(models.Subscription)
admin.site.register(models.Wishlist)
admin.site.register(models.Transaction)
admin.site.register(models.Profile)

