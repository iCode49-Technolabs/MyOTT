from rest_framework import serializers
from . import models
from django.contrib.auth.models import User

class CastSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cast
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.id = validated_data.get('id', instance.id)
        instance.castID = validated_data.get('castID', instance.castID)
        instance.castName = validated_data.get('castName', instance.castName)
        instance.castImage = validated_data.get('castImage', instance.castImage)
        instance.castType = validated_data.get('castType', instance.castType)
        instance.save()
        return instance


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(required = True)
    password2 = serializers.CharField(required = True)
    
    class Meta:
        model = User
        fields = [ 
            'username',
            'email',
            'password',
            'password2'
        ]
        extra_kwargs = {
            'password':{'write_only': True},
            'password2':{'write_only': True}
        }

    def create(self, validated_data):
        username = validated_data.get('username')
        email = validated_data.get('email')
        password = validated_data.get('password')
        password2 = validated_data.get('password2')
        
        if password == password2:
            user = User(username = username, email = email )
            user.set_password(password)
            user.save()
            return user
        else:
            raise serializers.ValidationError({
                'error' : 'Password does not Match'
            })

    
class UserSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = models.UserDetail
        fields = [ 'email']


class SubscriptionSerializer(serializers.ModelSerializer):   
    class Meta:
        model = models.Subscription
        fields = '__all__'


class UserDetailsSerializer(serializers.ModelSerializer):
    # subscription = SubscriptionSerializer(read_only=True, many=True)    
    class Meta:
        model = models.UserDetail
        fields = '__all__'

    def update(self, instance, validated_data):
        
        instance.id = validated_data.get('id', instance.id)
        instance.user_ID = validated_data.get('user_ID', instance.user_ID)
        instance.email = validated_data.get('email', instance.email)
        instance.mobileNumber = validated_data.get('mobileNumber', instance.mobileNumber)
        instance.userType = validated_data.get('userType', instance.userType)
        instance.firstName = validated_data.get('firstName', instance.firstName)
        instance.lastName = validated_data.get('lastName', instance.lastName)
        instance.birthDate = validated_data.get('birthDate', instance.birthDate)
        instance.isDelete = validated_data.get('isDelete', instance.isDelete)
        instance.isActive = validated_data.get('isActive', instance.isActive)
        instance.logicType = validated_data.get('logicType', instance.logicType)
        instance.googleID = validated_data.get('googleID', instance.googleID)
        instance.facebookID = validated_data.get('facebookID', instance.facebookID)
        instance.lastLoginDate = validated_data.get('lastLoginDate', instance.lastLoginDate)
        instance.subscription = validated_data.get('subscription', instance.subscription)
        instance.lastRenewedON = validated_data.get('lastRenewedON', instance.lastRenewedON)
        instance.modificationON = validated_data.get('modificationON', instance.modificationON)
        instance.OTP = validated_data.get('OTP', instance.OTP)
        instance.created_at = validated_data.get('created_at', instance.created_at)
        
        instance.save()
        return instance


class ProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Profile
        fields = '__all__'

    def update(self, instance, validated_data):
        
        instance.id = validated_data.get('id', instance.id)
        instance.user = validated_data.get('user', instance.user)
        instance.profileName = validated_data.get('profileName', instance.profileName)
        instance.avtar = validated_data.get('avtar', instance.avtar)
        instance.profileType = validated_data.get('profileType', instance.profileType)
        instance.interest = validated_data.get('interest', instance.interest)
        
        instance.save()
        return instance



class SubscriptionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Subscription
        fields = '__all__'

    def update(self, instance, validated_data):
        
        instance.id = validated_data.get('id', instance.id)
        instance.subscriptionName = validated_data.get('subscriptionName', instance.subscriptionName)
        instance.subscriptionType = validated_data.get('subscriptionType', instance.subscriptionType)
        instance.subscriptionDuration = validated_data.get('subscriptionDuration', instance.subscriptionDuration)
        instance.subscriptionDescription = validated_data.get('subscriptionDescription', instance.subscriptionDescription)
        instance.subscriptionAmount = validated_data.get('subscriptionAmount', instance.subscriptionAmount)
        instance.numberOfDevice = validated_data.get('numberOfDevice', instance.numberOfDevice)        
        instance.save()
        return instance


class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Category
        fields = '__all__'

    def update(self, instance, validated_data):
        
        instance.id = validated_data.get('id', instance.id)
        instance.categoryName = validated_data.get('categoryName', instance.categoryName)
        instance.categoryImage = validated_data.get('categoryImage', instance.categoryImage)
        instance.save()
        return instance



class GenreSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Genre
        fields = '__all__'

    def update(self, instance, validated_data):
        
        instance.id = validated_data.get('id', instance.id)
        instance.genreName = validated_data.get('genreName', instance.genreName)
        instance.save()
        return instance

class MovieSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Movie
        fields = '__all__'

    def update(self, instance, validated_data):
        
        instance.id = validated_data.get('id', instance.id)
        instance.movieName = validated_data.get('movieName', instance.movieName)
        instance.movieCategory = validated_data.get('movieCategory', instance.movieCategory)
        instance.movieGenre = validated_data.get('movieGenre', instance.movieGenre)
        instance.movieCast = validated_data.get('movieCast', instance.movieCast)
        instance.movieLanguage = validated_data.get('movieLanguage', instance.movieLanguage)
        instance.movieAccess = validated_data.get('movieAccess', instance.movieAccess)
        instance.moviePrice = validated_data.get('moviePrice', instance.moviePrice)
        instance.movieDuration = validated_data.get('movieDuration', instance.movieDuration)
        instance.movieDescription = validated_data.get('movieDescription', instance.movieDescription)
        instance.movieTrailer = validated_data.get('movieTrailer', instance.movieTrailer)
        instance.movieThumbnail = validated_data.get('movieThumbnail', instance.movieThumbnail)
        instance.moviePoster = validated_data.get('moviePoster', instance.moviePoster)
        instance.movieLink_360p = validated_data.get('movieLink_360p', instance.movieLink_360p)
        instance.movieLink_480p = validated_data.get('movieLink_480p', instance.movieLink_480p)
        instance.movieLink_720p = validated_data.get('movieLink_720p', instance.movieLink_720p)
        instance.movieLink_1080p = validated_data.get('movieLink_1080p', instance.movieLink_1080p)
        instance.active = validated_data.get('active', instance.active)
        instance.movieViews = validated_data.get('movieViews', instance.movieViews)
        instance.movieLikes = validated_data.get('movieLikes', instance.movieLikes)
        instance.movieDislikes = validated_data.get('movieDislikes', instance.movieDislikes)
        instance.movie_is_for18Plus = validated_data.get('movie_is_for18Plus', instance.movie_is_for18Plus)
        instance.moviePublishType = validated_data.get('moviePublishType', instance.moviePublishType)
        instance.laterMovieTime = validated_data.get('laterMovieTime', instance.laterMovieTime)
        instance.laterMovieDate = validated_data.get('laterMovieDate', instance.laterMovieDate)
        instance.save()
        return instance
