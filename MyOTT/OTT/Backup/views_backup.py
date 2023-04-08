
from OTT import models
import os, json
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password
from django.db import connection
from datetime import datetime
from django.contrib.auth.models import User, auth
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from .serializer import CastSerializer,UserSerializer, UserRegisterSerializer, UserDetailsSerializer
from . import serializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from rest_framework_simplejwt.tokens import RefreshToken


@csrf_exempt
@api_view(['GET','POST'])
def get_value(request):
    if request.method == 'GET':
        cast = models.Cast.objects.all()
        serializers = CastSerializer(cast, many= True)
        return JsonResponse({'cast': serializers.data}, safe=False)

    if request.method == 'POST':
        serializer = CastSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            res = {'msg': 'Data is created Successfully', 'status' : 200, 'data':serializer.data}
            return Response(res)


class CastUpdateViewAPIView(APIView):    
    def get(self, request, castName):
        try:
            cast = models.Cast.objects.get(castName = castName)
        except models.Cast.DoesNotExist:
            msg = {'msg': 'cast not found'}
            return Response(msg, status = status.HTTP_404_NOT_FOUND)

        serializers = CastSerializer(cast)
        return Response(serializers.data, status=status.HTTP_200_OK)


    def put(self, request, castName):
        try:
            cast = models.Cast.objects.get(castName = castName)
        except models.Cast.DoesNotExist:
            msg = {'msg': 'cast not found'}
            return Response(msg, status = status.HTTP_404_NOT_FOUND)

        serializer = CastSerializer(cast, data= request.data)
        if serializer.is_valid():
            serializer.save()
            res = {'msg': 'Data is created Successfully', 'status' : 200, 'data':serializer.data}
            return Response(res)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    def delete(self, request, castName):
        try:
            cast = models.Cast.objects.get(castName = castName)        
        except models.Cast.DoesNotExist:
            msg = {'msg': 'cast not found'}
            return Response(msg, status = status.HTTP_404_NOT_FOUND)

        cast.delete()
        res = {'msg': 'Data is Deleted Successfully', 'status' : 204}
        return Response(res)


# class CastAPIView(APIView):
#     serializer_class = serializer.CastSerializer

#     def get_queryset(self):
#         cast = models.Cast.objects.all()
#         return cast
    
#     def get(self, request, *args, **kwargs):
#         try:
#             ids = request.query_params["id"]
#             # print(castName, 'cheril')
#             if ids != None:
#                 print( 'cheril')
#                 cast = models.Cast.objects.get(id = ids)
#                 serializers = CastSerializer(cast, many= True)      
#             return Response(serializers.data)

#         except:
#             cast = self.get_queryset()
#             print('Gandhi')
#             serializers = serializer.CastSerializer(cast, many= True)
        
#         return Response(serializers.data)


class RegisterAPIView(APIView):
    serializer_class = serializer.UserRegisterSerializer
    serializer_user = serializer.UserSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data = request.data)
        serializer_user = self.serializer_user(data = request.data)

        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
           
            response_data = {
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'message': 'You are successfully Register.'
            }

            if serializer_user.is_valid():
                serializer_user.save()

            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

class UserDetailsAPIView(APIView):    
    def get(self, request, email):
        try:
            user = models.UserDetail.objects.get(email = email)
        
        except models.UserDetail.DoesNotExist:
            msg = {'msg': 'User not found'}
            return Response(msg, status = status.HTTP_404_NOT_FOUND)

        serializers = UserDetailsSerializer(user)
        return Response(serializers.data, status=status.HTTP_200_OK)

    def put(self, request, email):
        try:
            user = models.UserDetail.objects.get(email = email)
        except models.UserDetail.DoesNotExist:
            msg = {'msg': 'User not found'}
            return Response(msg, status = status.HTTP_404_NOT_FOUND)

        serializer = UserDetailsSerializer(user, data= request.data)
        if serializer.is_valid():
            serializer.save()
            res = {'msg': 'Data is created Successfully', 'status' : 200, 'data':serializer.data}
            return Response(res)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



def cast_details(request):
    cast = models.Cast.object.get(id = 5)
    serializers = CastSerializer(cast)

