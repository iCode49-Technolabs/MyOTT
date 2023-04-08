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
    path('api/otp_Verification/',views.otp_Verification, name='otp_Verification'),
    path('api/forgot_otp/',views.forgot_otp, name='forgot_otp'),
    path('api/update_password/',views.update_password, name='update_password'),
    
    # path('api/change_password/',views.change_password, name='change_password'),
    


    ### Login
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    ### Profile
    path('api/profile_create/',views.profile_create, name='profile_create'),
    path('api/profile_update/',views.profile_update, name='profile_update'),
    path('api/profile_details/',views.profile_details, name='profile_details'),
    path('api/profile_delete/',views.profile_delete, name='profile_delete'),
    path('api/user_profile_list/',views.user_profile_list, name='user_profile_list'),

    
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
    path('api/movie_details/',views.movie_details, name='movie_details'),

    ### Series
    path('api/series_create/',views.series_create, name='series_create'),
    path('api/series_update/',views.series_update, name='series_update'),
    path('api/series_details/',views.series_details, name='series_details'),

    ### Episode
    path('api/episode_create/',views.episode_create, name='episode_create'),
    path('api/episode_update/',views.episode_update, name='episode_update'),
    path('api/episode_details/',views.episode_details, name='episode_details'),

    ### Wishlist
    path('api/user_wishlist_create/',views.user_wishlist_create, name='user_wishlist_create'),
    path('api/wishlist_delete/',views.wishlist_delete, name='wishlist_delete'),
    path('api/user_wishilist_list/',views.user_wishilist_list, name='user_wishilist_list'),


    ### Avatar
    path('api/avatar_create/',views.avatar_create, name='avatar_create'),
    path('api/all_avatar_list/',views.all_avatar_list, name='all_avatar_list'),
    path('api/avatar_update/',views.avatar_update, name='avatar_update'),



]
