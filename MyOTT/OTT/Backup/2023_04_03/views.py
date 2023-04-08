
from OTT import models
import os, json
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password
from django.db import connection
from datetime import datetime
from django.contrib.auth.models import User, auth
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from .serializer import CastSerializer,UserSerializer, UserRegisterSerializer, UserDetailsSerializer, ProfileSerializer, SubscriptionSerializer, CategorySerializer,GenreSerializer, MovieSerializer
from . import serializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import HttpResponse
import io
from rest_framework.parsers import JSONParser

        
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
                "statuscode":200,
                "status":"Success",
                'message': 'You are successfully Register.'
            }

            if serializer_user.is_valid():
                serializer_user.save()

            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def add_user_details(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    email = python_data.get('email', None)
    try:
        user = models.UserDetail.objects.get(email = email)
        serializer = UserDetailsSerializer(user, data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'Message' : 'User Details Updated Successfully',
                "statuscode":200,
                "status":"Success",
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    
    except models.UserDetail.DoesNotExist:
        msg = {'Message': 'Data not found'}
        json_data = JSONRenderer().render(msg) 
        return HttpResponse(json_data, content_type= 'application/json')

### Profile CRUD
@csrf_exempt
def profile_create(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    serializer = ProfileSerializer(data= python_data)
    if serializer.is_valid():
        serializer.save()
        res = {
            'Message' : 'Profile is created Successfully', 
            'statuscode' : 200, 
            'status' : "Success", 
            'data':serializer.data
            }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    # return HttpResponse(JSONRenderer().render(serializer.errors), content_type= 'application/json')
    res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
    json_data = JSONRenderer().render(res)
    return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def profile_update(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    try:
        cast = models.Profile.objects.get(id = id)
        serializer = ProfileSerializer(cast, data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Profile Updated Successfully',
                'data':serializer.data
                }
                
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    
    except models.Profile.DoesNotExist:
        msg = {'Message': 'Data not found'}
        json_data = JSONRenderer().render(msg) 
        return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def profile_details(request):
    if (request.method == "GET"):
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        id = python_data.get('id')
        try:    
            cast = models.Profile.objects.get(id = id)
            serializer = ProfileSerializer(cast)
            # json_data = JSONRenderer().render(serializer.data)
            res = {
                'statuscode' : 200,
                "status":"Success",
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')

        except models.Profile.DoesNotExist:
            msg = {'Message': 'Profile Details not found'}
            json_data = JSONRenderer().render(msg) 
            return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def profile_delete(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    print(id)
    if id is not None:
        try:
            cast = models.Profile.objects.get(id = id)
            cast.delete()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Profile Deleted successfully.'
                }

            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        except models.Profile.DoesNotExist:    
            res = {'Message' : 'Data is not Valid.'}
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
    msg = {'Message': 'Enter Valid Id.'}
    json_data = JSONRenderer().render(msg) 
    return HttpResponse(json_data, content_type= 'application/json')

### subscription
@csrf_exempt
def subscription_create(request):
    if request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        serializer = SubscriptionSerializer(data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'msg' : 'Subscription is created Successfully', 
                'statuscode' : 200, 
                'status' : "Success", 
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        # return HttpResponse(JSONRenderer().render(serializer.errors), content_type= 'application/json')
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')

@api_view(['GET'])
def all_subscription_details(request):
    if (request.method == "GET"):
        subscription = models.Subscription.objects.all()
        serializer = SubscriptionSerializer(subscription, many=True)
        res = {
            'statuscode' : 200,
            "status":"Success",
            'data':serializer.data
            }
        return Response(res)


@csrf_exempt
def subscription_details(request):
    if (request.method == "GET"):
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        id = python_data.get('id')
        try:    
            subscription = models.Subscription.objects.get(id = id)
            serializer = SubscriptionSerializer(subscription)
            # json_data = JSONRenderer().render(serializer.data)
            res = {
                'statuscode' : 200,
                "status":"Success",
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')

        except models.Subscription.DoesNotExist:
            msg = {'Message': 'Profile Details not found'}
            json_data = JSONRenderer().render(msg) 
            return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def subscription_update(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    try:
        subscription = models.Subscription.objects.get(id = id)
        serializer = SubscriptionSerializer(subscription, data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Subscription Updated Successfully',
                'data':serializer.data
                }
                
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    
    except models.Subscription.DoesNotExist:
        msg = {'Message': 'Data not found'}
        json_data = JSONRenderer().render(msg) 
        return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def subscription_delete(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    if id is not None:
        try:
            cast = models.Subscription.objects.get(id = id)
            cast.delete()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Subscription is Deleted Successfully.',
                }

            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        except models.Subscription.DoesNotExist:    
            res = {'Message' : 'Data is not Valid.'}
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
    msg = {'Message': 'Enter Valid Id.'}
    json_data = JSONRenderer().render(msg) 
    return HttpResponse(json_data, content_type= 'application/json')


#### Cast CRUD
@csrf_exempt
def cast_create(request):
    if request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        serializer = CastSerializer(data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'msg' : 'Cast is created Successfully', 
                'statuscode' : 200, 
                'status' : "Success", 
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        # return HttpResponse(JSONRenderer().render(serializer.errors), content_type= 'application/json')
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def cast_details(request):
    if (request.method == "GET"):
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        id = python_data.get('id')
        try:    
            cast = models.Cast.objects.get(id = id)
            serializer = CastSerializer(cast)
            # json_data = JSONRenderer().render(serializer.data)
            res = {
                'statuscode' : 200,
                "status":"Success",
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')

        except models.Cast.DoesNotExist:
            msg = {'Message': 'Cast not found'}
            json_data = JSONRenderer().render(msg) 
            return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def cast_update(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    try:
        cast = models.Cast.objects.get(id = id)
        serializer = CastSerializer(cast, data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Cast is Updated Successfully',
                'data':serializer.data
                }
                
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    
    except models.Cast.DoesNotExist:
        msg = {'Message': 'Data not found'}
        json_data = JSONRenderer().render(msg) 
        return HttpResponse(json_data, content_type= 'application/json')

@csrf_exempt
def cast_delete(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    if id is not None:
        try:
            cast = models.Cast.objects.get(id = id)
            cast.delete()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Cast is Deleted.',
                'data':serializer.data
                }

            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        except models.Cast.DoesNotExist:    
            res = {'Message' : 'Data is not Valid.'}
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
    msg = {'Message': 'Enter Valid Id.'}
    json_data = JSONRenderer().render(msg) 
    return HttpResponse(json_data, content_type= 'application/json')


@api_view(['GET'])
def all_cast_list(request):
    if (request.method == "GET"):
        # subscription = models.Cast.objects.all().values()
        cast = models.Cast.objects.only("castName")
        # print(cast)
        
        serializer = CastSerializer(cast, many=True)
        print(serializer.data,'Gandhi')
        res = {
            'statuscode' : 200,
            "status":"Success",
            'data':serializer.data
            }
        return Response(res)



### CRUD Category
@csrf_exempt
def category_create(request):
    if request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        serializer = CategorySerializer(data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'msg' : 'Category is created Successfully', 
                'statuscode' : 200, 
                'status' : "Success", 
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        # return HttpResponse(JSONRenderer().render(serializer.errors), content_type= 'application/json')
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')



@csrf_exempt
def category_update(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    try:
        category = models.Category.objects.get(id = id)
        serializer = CategorySerializer(category, data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Category is Updated Successfully',
                'data':serializer.data
                }
                
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    
    except models.Category.DoesNotExist:
        msg = {'Message': 'Data not found'}
        json_data = JSONRenderer().render(msg) 
        return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def category_delete(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    if id is not None:
        try:
            cast = models.Category.objects.get(id = id)
            cast.delete()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Category is Deleted Successfully.'
                }

            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        except models.Category.DoesNotExist:    
            res = {'Message' : 'Data is not Valid.'}
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
    msg = {'Message': 'Enter Valid Id.'}
    json_data = JSONRenderer().render(msg) 
    return HttpResponse(json_data, content_type= 'application/json')


#### CRUD Genre
@csrf_exempt
def genre_create(request):
    if request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        serializer = GenreSerializer(data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'msg' : 'Genre is created Successfully', 
                'statuscode' : 200, 
                'status' : "Success", 
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        # return HttpResponse(JSONRenderer().render(serializer.errors), content_type= 'application/json')
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def genre_update(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    try:
        genre = models.Genre.objects.get(id = id)
        serializer = GenreSerializer(genre, data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Genre is Updated Successfully',
                'data':serializer.data
                }
                
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    
    except models.Genre.DoesNotExist:
        msg = {'Message': 'Data not found'}
        json_data = JSONRenderer().render(msg) 
        return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def genre_delete(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    if id is not None:
        try:
            cast = models.Genre.objects.get(id = id)
            cast.delete()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Genre is Deleted Successfully.'
                }

            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        except models.Genre.DoesNotExist:    
            res = {'Message' : 'Data is not Valid.'}
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
    msg = {'Message': 'Enter Valid Id.'}
    json_data = JSONRenderer().render(msg) 
    return HttpResponse(json_data, content_type= 'application/json')


### CRUD Movie
@csrf_exempt
def movie_create(request):
    if request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        serializer = MovieSerializer(data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'msg' : 'Movie is created Successfully', 
                'statuscode' : 200, 
                'status' : "Success", 
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        # return HttpResponse(JSONRenderer().render(serializer.errors), content_type= 'application/json')
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def movie_update(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    try:
        movie = models.Movie.objects.get(id = id)
        serializer = MovieSerializer(movie, data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Movie is Updated Successfully',
                'data':serializer.data
                }
                
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    
    except models.Movie.DoesNotExist:
        msg = {'Message': 'Data not found'}
        json_data = JSONRenderer().render(msg) 
        return HttpResponse(json_data, content_type= 'application/json')
