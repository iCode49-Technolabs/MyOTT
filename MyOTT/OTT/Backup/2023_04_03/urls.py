from django.urls import path
from OTT import views
from OTT.views import RegisterAPIView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView, )


urlpatterns = [
    ### Register 
    path('api/register/',RegisterAPIView.as_view(), name='register_user'),
    path('api/add_user_details/',views.add_user_details, name='add_user_details'),
    
    ### Login
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    ### Profile
    path('api/profile_create/',views.profile_create, name='profile_create'),
    path('api/profile_update/',views.profile_update, name='profile_update'),
    path('api/profile_details/',views.profile_details, name='profile_details'),
    path('api/profile_delete/',views.profile_delete, name='profile_delete'),
    
    ### Subscription
    path('api/subscription_create/',views.subscription_create, name='subscription_create'),
    path('api/all_subscription_details/',views.all_subscription_details, name='all_subscription_details'),
    path('api/subscription_details/',views.subscription_details, name='subscription_details'),
    path('api/subscription_update/',views.subscription_update, name='subscription_update'),
    path('api/subscription_delete/',views.subscription_delete, name='subscription_delete'),

    ### Cast
    path('api/cast_details/',views.cast_details, name='cast_details'),
    path('api/cast_create/',views.cast_create, name='cast_create'),
    path('api/cast_update/',views.cast_update, name='cast_update'),
    path('api/cast_delete/',views.cast_delete, name='cast_delete'),
    path('api/all_cast_list/',views.all_cast_list, name='all_cast_list'),

    ### Category
    path('api/category_create/',views.category_create, name='category_create'),
    path('api/category_update/',views.category_update, name='category_update'),
    path('api/category_delete/',views.category_delete, name='category_delete'),

    ### Genre
    path('api/genre_create/',views.genre_create, name='genre_create'),
    path('api/genre_update/',views.genre_update, name='genre_update'),
    path('api/genre_delete/',views.genre_delete, name='genre_delete'),


    ### Movies
    path('api/movie_create/',views.movie_create, name='movie_create'),
    path('api/movie_update/',views.movie_update, name='movie_update'),



]
