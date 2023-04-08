from django.urls import path
from OTT import views
# from OTT.views import RegisterAPIView, CastUpdateViewAPIView, UserDetailsAPIView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView, )

urlpatterns = [
    # path('api/get_value/',views.get_value, name='get_value'),

    # # path('register_user/',views.register_user, name='register_user'),
    
    # path('api/register/',RegisterAPIView.as_view(), name='register_user'),
    # path('api/cast_details/<str:castName>',CastUpdateViewAPIView.as_view(), name='cast_details'),
    # path('api/user_details/<str:email>',UserDetailsAPIView.as_view(), name='user_details'),
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('api/cast_details/',views.cast_details, name='cast_details'),


]
