
from OTT import models
import os, json
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password
from django.db import connection
from datetime import datetime
from django.contrib.auth.models import User, auth
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from .serializer import CastSerializer,UserSerializer, UserRegisterSerializer, UserDetailsSerializer,forgotOTPSerializer ,ProfileSerializer, SubscriptionSerializer, CategorySerializer,GenreSerializer, MovieSerializer,SeriesSerializer, EpisodeSerializer, WishlistSerializer, AvatarSerializer, otpVerificationSerializer, otpStatusSerializer
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
import math, random 
from datetime import datetime, timedelta

        
class RegisterAPIView(APIView):
    serializer_class = serializer.UserRegisterSerializer
    serializer_user = serializer.UserSerializer

    def post(self, request, format=None):
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        mobile = python_data.get('mobileNumber')
        email = python_data.get('email')
        
        serializer = self.serializer_class(data = request.data)
        serializer_user = self.serializer_user(data = request.data)
        mobile_verify = models.UserDetail.objects.filter(mobileNumber = mobile).count()
        now = datetime.now()
        # now_plus_1 = now + timedelta(seconds = 45)
        now_plus_1 = now + timedelta(minutes = 1)
    
        if mobile_verify == 0:
            if serializer.is_valid() and serializer_user.is_valid():
                digits = "0123456789"
                OTP = ""
                for i in range(6) :
                    OTP += digits[math.floor(random.random() * 10)]

                user = serializer.save()
                refresh = RefreshToken.for_user(user)

                user_detail = models.UserDetail.objects.create(
                    email=email, 
                    mobileNumber=mobile, 
                    OTP=OTP,
                    otpVerificationTime = now_plus_1

                )
                user_detail.save();
                    # serializer_user.save()

                response_data = {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    "statuscode":200,
                    "status":"Success",
                    'message': 'You are successfully Register.',
                    "OTP" : OTP
                }


                return Response(response_data , status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)
        else:
            res = {'Message' : 'This Mobile Number is already Register.'}
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')

#### Parameter

# {
#     "username": "test@gmail11.com",
#     "email": "test@gmail11.com", 
#     "password":"test@123", 
#     "password2":"test@123",
#     "mobileNumber": 1234123
# }


@csrf_exempt
def forgot_otp(request) :
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    mobile = python_data.get('mobileNumber')
    email = python_data.get('email')
    mobile_verify = models.UserDetail.objects.filter(mobileNumber = mobile).count()
    now = datetime.now()
    # now_plus_1 = now + timedelta(seconds = 45)
    now_plus_1 = now + timedelta(minutes = 1)
    otpVerification = 'no'
    if mobile_verify == 1:
        
        digits = "0123456789"
        OTP = ""
        for i in range(6) :
            OTP += digits[math.floor(random.random() * 10)]

        update_otp = models.UserDetail.objects.get(email = email)
        serializer = forgotOTPSerializer(update_otp, data= python_data)
        if serializer.is_valid():
            user = models.UserDetail.objects.get(email = email)
            user.OTP = OTP
            user.otpVerification = otpVerification
            user.otpVerificationTime = now_plus_1
            user.save()
            

            res = {
                'statuscode' : 200,
                "status":"Success",
                'OTP':OTP
                }
                
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
### Parameters

# {
#      "email": "test@gmail112.com", 
#      "mobileNumber": 123412123
# }        



@csrf_exempt
def otp_Verification(request) :
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    email = python_data.get('email', None)
    number = python_data.get('mobileNumber', None)
    otp = python_data.get('OTP', None)
    
    get_otp = models.UserDetail.objects.filter(email = email, mobileNumber = number).values('OTP')
    for ot in get_otp:
        for final_otp in ot.values():
            final_otp=final_otp

    now = datetime.now()
    current_time = now.strftime("%m/%d/%Y, %H:%M:%S")
    # print(current_time)
    get_OTPtime = models.UserDetail.objects.filter(email = email, mobileNumber = number).values('otpVerificationTime')
    
    list_of_record = []
    for record in get_OTPtime:
        record_dict = {}
        if record:
            for key, val in record.items():
                if key == 'otpVerificationTime' and type(val) != str:
                    record_dict[key] = val.strftime("%m/%d/%Y, %H:%M:%S")
                else:
                    record_dict[key] = val
            list_of_record.append(record_dict)

    for ot in list_of_record:
        for final_time in ot.values():
            final_time=final_time
    # print(final_time, "final_time")

    if current_time < final_time :
        # print(True)
        if int(final_otp) == int(otp):
            print(True)
            user_detail = models.UserDetail.objects.get(email=email)
            serializer = otpStatusSerializer(user_detail, data={'otpVerification': 'yes'})
            if serializer.is_valid():
                serializer.save()
                res = {
                    'statuscode' : 200,
                    "status":"Success",
                    'Message' : 'OTP Verify Successfully.'
                    }
                    
                json_data = JSONRenderer().render(res)
                return HttpResponse(json_data, content_type= 'application/json')
            res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')

        res = {'Message' : 'OTP is not matched.'}
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    
    res = {'Message' : 'OTP timeout.'}
    json_data = JSONRenderer().render(res)
    return HttpResponse(json_data, content_type= 'application/json')
#### Parameter

# {
#     "email": "test@gmail11.com", 
#     "mobileNumber": 123412,
#     "OTP": 221329
# }


@csrf_exempt
def update_password(request) :
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    password = python_data.get('password')
    password2 = python_data.get('password2')
    email = python_data.get('email')
    email_verify = models.User.objects.filter(email = email).count()

    if email_verify == 1:
        
        update_password = models.User.objects.get(email = email)
        serializer = UserRegisterSerializer(update_password, data= python_data)
        if serializer.is_valid():
            serializer.save()

            res = {
                'statuscode' : 200,
                "status":"Success",
                'msg':"Password Update Successfully."
                }
                
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')   
        else:
            res = {
                    'msg':"Password Not"
                    }
                    
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
    
    return HttpResponse(serializer.errors, content_type= 'application/json')

### parameter
# {
#     "username":"test@gmail112.com",
#     "email": "test@gmail112.com", 
#     "password":"Cheril@123",
#     "password2" : "Cheril@123"
# }




@csrf_exempt
def add_user_details(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    email = python_data.get('email', None)

    try:
        if models.UserDetail.objects.filter(email = email, otpVerification='yes'):
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
        else:
            res = {'Message' : 'Please, Verify OTP First.'}
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

@csrf_exempt
def movie_details(request):
    if (request.method == "GET"):
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        id = python_data.get('id')
        try:    
            movie = models.Movie.objects.get(id = id)
            serializer = MovieSerializer(movie)
            # json_data = JSONRenderer().render(serializer.data)
            res = {
                'statuscode' : 200,
                "status":"Success",
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')

        except models.Movie.DoesNotExist:
            msg = {'Message': 'Movie not found'}
            json_data = JSONRenderer().render(msg) 
            return HttpResponse(json_data, content_type= 'application/json')



@csrf_exempt
def series_create(request):
    if request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        serializer = SeriesSerializer(data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'msg' : 'Series created Successfully', 
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
def series_update(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    try:
        series = models.Series.objects.get(id = id)
        serializer = SeriesSerializer(series, data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Series is Updated Successfully',
                'data':serializer.data
                }
                
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    
    except models.Series.DoesNotExist:
        msg = {'Message': 'Data not found'}
        json_data = JSONRenderer().render(msg) 
        return HttpResponse(json_data, content_type= 'application/json')


def series_details(request):
    if (request.method == "GET"):
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        id = python_data.get('id')
        try:    
            series = models.Series.objects.get(id = id)
            serializer = SeriesSerializer(series)
            # json_data = JSONRenderer().render(serializer.data)
            res = {
                'statuscode' : 200,
                "status":"Success",
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')

        except models.Series.DoesNotExist:
            msg = {'Message': 'Series not found'}
            json_data = JSONRenderer().render(msg) 
            return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def episode_create(request):
    if request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        serializer = EpisodeSerializer(data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'msg' : 'Episode created Successfully', 
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
def episode_update(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    try:
        episode = models.Episode.objects.get(id = id)
        serializer = EpisodeSerializer(episode, data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Episode is Updated Successfully',
                'data':serializer.data
                }
                
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    
    except models.Episode.DoesNotExist:
        msg = {'Message': 'Data not found'}
        json_data = JSONRenderer().render(msg) 
        return HttpResponse(json_data, content_type= 'application/json')


def episode_details(request):
    if (request.method == "GET"):
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        id = python_data.get('id')
        try:    
            episode = models.Episode.objects.get(id = id)
            serializer = EpisodeSerializer(episode)
            # json_data = JSONRenderer().render(serializer.data)
            res = {
                'statuscode' : 200,
                "status":"Success",
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')

        except models.Episode.DoesNotExist:
            msg = {'Message': 'Episode not found'}
            json_data = JSONRenderer().render(msg) 
            return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def user_profile_list(request):
    if (request.method == "GET"):
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        id = python_data.get('id')
        user_id = models.UserDetail.objects.filter(id = id)
    
        if user_id :
            print(True)        
            profile = models.Profile.objects.filter(user_id = id)
            # print(profile, 'Cheril;')
            serializer = ProfileSerializer(profile, many=True)
            # json_data = JSONRenderer().render(serializer.data)
            res = {
                'statuscode' : 200,
                "status":"Success",
                'data':serializer.data
                }
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        else:
            msg = {'Message': 'User not found'}
            json_data = JSONRenderer().render(msg) 
            return HttpResponse(json_data, content_type= 'application/json')

@csrf_exempt
def avatar_create(request):
    if request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        serializer = AvatarSerializer(data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'msg' : 'Avatar created Successfully', 
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
def all_avatar_list(request):
    if (request.method == "GET"):
        
        avatar = models.Avatar.objects.all()
        serializer = AvatarSerializer(avatar, many=True)
        res = {
            'statuscode' : 200,
            "status":"Success",
            'data':serializer.data
            }
        return Response(res)



@csrf_exempt
def avatar_update(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    try:
        avatar = models.Avatar.objects.get(id = id)
        serializer = AvatarSerializer(avatar, data= python_data)
        if serializer.is_valid():
            serializer.save()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Avatar is Updated Successfully',
                'data':serializer.data
                }
                
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        res = {'Message' : 'Data is not Valid.', 'Error': serializer.errors }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    
    except models.Avatar.DoesNotExist:
        msg = {'Message': 'Data not found'}
        json_data = JSONRenderer().render(msg) 
        return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def user_wishlist_create(request):
    if request.method == 'POST':
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        mainUser = python_data.get('mainUser')
        mainuser_id = models.UserDetail.objects.filter(id = mainUser)
        if mainuser_id:
            profile_id = python_data.get('profileID')
            profile = models.Profile.objects.filter(id = profile_id, user_id = mainUser).count()
            if profile == 1:
                serializer = WishlistSerializer(data= python_data)
                if serializer.is_valid():
                    serializer.save()
                    res = {
                        'msg' : 'Wishlist created Successfully', 
                        'statuscode' : 200, 
                        'status' : "Success", 
                        'data':serializer.data
                        }
                    json_data = JSONRenderer().render(res)
                    return HttpResponse(json_data, content_type= 'application/json')

                res = {'Message' : 'Data Invalid.', 'Error': serializer.errors }
                json_data = JSONRenderer().render(res)
                return HttpResponse(json_data, content_type= 'application/json')
            res = {'Message' : 'Profile Not Found.'}
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        res = {'Message' : 'User Not Found.'}
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
            
@csrf_exempt
def wishlist_delete(request):
    json_data = request.body
    stream = io.BytesIO(json_data)
    python_data = JSONParser().parse(stream)
    id = python_data.get('id', None)
    if id is not None:
        try:
            wishlist = models.Wishlist.objects.get(id = id)
            wishlist.delete()
            res = {
                'statuscode' : 200,
                "status":"Success",
                'Message' : 'Wishlist is Deleted Successfully.'
                }

            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
        except models.Wishlist.DoesNotExist:    
            res = {'Message' : 'Data is not Valid.'}
            json_data = JSONRenderer().render(res)
            return HttpResponse(json_data, content_type= 'application/json')
        
    msg = {'Message': 'Enter Valid Id.'}
    json_data = JSONRenderer().render(msg) 
    return HttpResponse(json_data, content_type= 'application/json')


@csrf_exempt
def user_wishilist_list(request):
    if (request.method == "GET"):
        json_data = request.body
        stream = io.BytesIO(json_data)
        python_data = JSONParser().parse(stream)
        mainUser = python_data.get('mainUser')
        profile = python_data.get('profileID')
        wishlist = models.Wishlist.objects.filter(mainUser = mainUser, profileID= profile)
    
        serializer = WishlistSerializer(wishlist, many=True)
        # json_data = JSONRenderer().render(serializer.data)
        res = {
            'statuscode' : 200,
            "status":"Success",
            'data':serializer.data
            }
        json_data = JSONRenderer().render(res)
        return HttpResponse(json_data, content_type= 'application/json')
    


        