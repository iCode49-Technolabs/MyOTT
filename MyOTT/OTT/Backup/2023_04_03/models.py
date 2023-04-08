from django.db import models
from django.contrib.auth.models import User
from django.template.defaultfilters import slugify
from datetime import datetime
from OTT import validators



class Role(models.Model):
    # roleID = models.BigIntegerField(verbose_name="Role id ")
    roleName = models.CharField(max_length=100, verbose_name="Role Name")

    def __str__(self):
        return "%s" % self.roleName

       
class Subscription(models.Model):
    # subscriptionID = models.BigIntegerField(verbose_name="Subscription id")
    subscriptionName = models.CharField(max_length=500 ,verbose_name="Subscription Name")
    subscriptionType = models.CharField(max_length=500 ,verbose_name="Subscription Type", null=True,)
    subscriptionDuration = models.CharField(max_length=500, verbose_name="Subscription Durations",  null=True,)
    subscriptionDescription = models.TextField(verbose_name="Subscription Description", null=True,blank=True) 
    subscriptionAmount = models.IntegerField(blank=True, null=True, verbose_name='Subscription Amount')
    numberOfDevice = models.IntegerField(blank=True, null=True, verbose_name='Number of Device')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s" % self.id + ' ' + self.subscriptionName

class UserDetail(models.Model):
    user_ID = models.CharField(max_length=100, verbose_name="User ID",null=True)
    email = models.CharField(max_length=200, verbose_name="User Email")
    mobileNumber = models.CharField(max_length=15, verbose_name="Mobile Number",  null=True)
    userType = models.ForeignKey(Role, related_name="role", null=True,verbose_name="User Role", on_delete=models.CASCADE, default=None)
    firstName = models.CharField(max_length=200, verbose_name="First Name", null=True)
    lastName = models.CharField(max_length=200, verbose_name="Last Name", null=True)
    birthDate = models.DateField(verbose_name='Birth Date', null=True)
    isActive = models.CharField(max_length=3, verbose_name="is user Active", default='yes')
    isDelete = models.CharField(max_length=3, verbose_name="is user Delete", default='no')
    logicType = models.IntegerField(blank=True, null=True, verbose_name='Logic Type')
    googleID = models.CharField(max_length=100, verbose_name="Google ID", null=True)
    facebookID = models.CharField(max_length=100, verbose_name="Facebook ID", null=True)
    lastLoginDate = models.DateTimeField(auto_now_add=True, verbose_name='Last Login Date')
    subscription = models.ForeignKey(Subscription, related_name="subscription_ID", verbose_name="Subscription ID", null=True, on_delete=models.CASCADE, default=None)
    lastRenewedON = models.DateField(verbose_name='Last Renewed On',null=True)
    modificationON = models.DateTimeField(null=True, verbose_name='Modification On')
    OTP = models.CharField(max_length=50, blank=True, null=True, verbose_name='OTP')
    created_at = models.DateTimeField(auto_now_add=True)
     
    def __str__(self):
        return "%s" % self.email

class Profile(models.Model):
    # profileID = models.BigIntegerField(verbose_name="Profile id")
    user = models.ForeignKey(UserDetail, related_name="user_id", verbose_name="User ID", null=True, on_delete=models.CASCADE, default=None)
    profileName = models.CharField(max_length=100, blank=True, null=True, verbose_name='Profile Name')
    avtar = models.CharField(max_length=500, blank=True, null=True, verbose_name='Avtar')
    profileType = models.CharField(max_length=50, blank=True, null=True, verbose_name='Profile Type')
    interest = models.TextField(verbose_name="Interest", null=True,blank=True) 

    def __str__(self):
        return "%s" % self.profileName

class Category(models.Model):
    # categoryID = models.BigIntegerField(verbose_name="Category id ")
    categoryName = models.CharField(max_length=100, verbose_name="Category Name")
    categoryImage = models.FileField(upload_to='OTT/static/image/category_image', verbose_name='category Images', null=True, blank=True,
                             validators=[validators.validate_file_extension_image])
    def __str__(self):
        return "%s" % self.categoryName

class Genre(models.Model):
    # genreID = models.BigIntegerField(verbose_name="Genre id ")
    genreName = models.CharField(max_length=100, verbose_name="Genre Name")
    
    def __str__(self):
        return "%s" % self.genreName

class Cast(models.Model):
    # castID = models.BigIntegerField(verbose_name="Cast id ")
    castName = models.CharField(max_length=100, verbose_name="Cast Name")
    castImage = models.FileField(upload_to='OTT/static/image/cast_image', verbose_name='Cast Images', null=True, blank=True,
                             validators=[validators.validate_file_extension_image])
    castType = models.CharField(max_length=100, verbose_name="Cast Type")
    
    def __str__(self):
        return "%s" % self.castName 

class Movie(models.Model):
    # movieID = models.BigIntegerField(verbose_name="Movie id ")
    movieName = models.CharField(max_length=500, verbose_name="Movie Name")
    movieCategory = models.ForeignKey(Category, related_name="Movie_category", verbose_name="Category", null=True, on_delete=models.CASCADE, default=None)
    movieGenre = models.ForeignKey(Genre, related_name="Movie_genre", null=True,verbose_name="Genre", on_delete=models.CASCADE, default=None)
    movieCast = models.ForeignKey(Cast, related_name="Movie_cast", verbose_name="Cast", null=True, on_delete=models.CASCADE, default=None)
    movieLanguage = models.CharField(max_length=500, verbose_name="Movie Language",default=None)
    movieAccess = models.CharField(max_length=10, verbose_name="Movie Access",default=None)
    moviePrice = models.IntegerField(blank=True, null=True)
    movieDuration = models.CharField(max_length=50, verbose_name="Movie Durations", null=True)
    movieDescription = models.TextField(verbose_name="Movie Description", null=True,blank=True) 
    movieTrailer = models.CharField(max_length=500, verbose_name="Movie Trailer", null=True)
    movieThumbnail = models.FileField(upload_to='OTT/static/image/movies/thumbnail', verbose_name='Movie Thumbail', null=True, blank=True,
                             validators=[validators.validate_file_extension_image])
    moviePoster = models.FileField(upload_to='OTT/static/image/movies/poster', verbose_name='Movie Poster', null=True, blank=True,
                             validators=[validators.validate_file_extension_image])
    movieLink_360p = models.CharField(max_length=500, verbose_name="Movie Link 360p", null=True)
    movieLink_480p = models.CharField(max_length=500, verbose_name="Movie Link 480p", null=True)
    movieLink_720p = models.CharField(max_length=500, verbose_name="Movie Link 720p", null=True)
    movieLink_1080p = models.CharField(max_length=500, verbose_name="Movie Link 1080p", null=True)
    active = models.CharField(max_length=3, verbose_name="is Movie Active", default='yes')
    movieViews = models.IntegerField(blank=True, null=True)
    movieLikes = models.IntegerField(blank=True, null=True)
    movieDislikes = models.IntegerField(blank=True, null=True)
    movie_is_for18Plus = models.CharField(max_length=3, verbose_name="movie is for 18+", null=True)
    moviePublishType = models.CharField(max_length=5, verbose_name="Movie Publish Type", null=True)
    laterMovieTime = models.TimeField(default=None)
    laterMovieDate = models.DateField(default=None)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s" % self.movieName  

class Series(models.Model):
    # seriesID = models.BigIntegerField(verbose_name="Series id ")
    seriesName = models.CharField(max_length=500, verbose_name="Series Name")
    seriesCategory = models.ForeignKey(Category, related_name="seriesCategory", verbose_name="Category", null=True, on_delete=models.CASCADE, default=None)
    seriesGenre = models.ForeignKey(Genre, related_name="seriesGenre", null=True,verbose_name="Genre", on_delete=models.CASCADE, default=None)
    seriesCast = models.ForeignKey(Cast, related_name="seriesCast", verbose_name="Cast", null=True, on_delete=models.CASCADE, default=None)
    seriesLanguage = models.CharField(max_length=500, verbose_name="Series Language",default=None)
    seriesDescription = models.TextField(verbose_name="Series Description", null=True,blank=True) 
    seriesTrailer = models.CharField(max_length=500, verbose_name="Series Trailer")
    seriesPoster = models.FileField(upload_to='OTT/static/image/series/poster', verbose_name='series Poster', null=True, blank=True,
                             validators=[validators.validate_file_extension_image])
    seriesViews = models.IntegerField(blank=True, null=True, verbose_name="Series Views")
    seriesLikes = models.IntegerField(blank=True, null=True, verbose_name="Series Likes")
    seriesDislikes = models.IntegerField(blank=True, null=True, verbose_name="Series Dislikes")
    seasonNumber = models.IntegerField(blank=True, null=True, verbose_name="Total Season")
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return "%s" % self.seriesName

class Episode(models.Model):
    # episodeID = models.BigIntegerField(verbose_name="Episode id ")
    seriesName = models.ForeignKey(Series, related_name="series_name", verbose_name="Series Name", null=True, on_delete=models.CASCADE, default=None)
    episodeName = models.CharField(max_length=500, verbose_name="Episode Name")
    episodeNumber = models.IntegerField(blank=True, null=True, verbose_name="Episode Number")
    seasonNumber = models.IntegerField(blank=True, null=True, verbose_name="Season Number")
    episodeDuration = models.CharField(max_length=50, verbose_name="Episode Durations")
    episodeDescription = models.TextField(verbose_name="Episode Description", null=True,blank=True) 
    episodeThumbnail = models.FileField(upload_to='OTT/static/image/episode/thumbnail', verbose_name='Episode Thumbail', null=True, blank=True,
                             validators=[validators.validate_file_extension_image])
    episodeLink_360p = models.CharField(max_length=500, verbose_name="Episode Link 360p")
    episodeLink_480p = models.CharField(max_length=500, verbose_name="Episode Link 480p")
    episodeLink_720p = models.CharField(max_length=500, verbose_name="Episode Link 720p")
    episodeLink_1080p = models.CharField(max_length=500, verbose_name="Episode Link 1080p")
    episodeAccess = models.CharField(max_length=10, verbose_name="Episode Access",default=None)
    active = models.CharField(max_length=3, verbose_name="is Episode Active", default='yes')
    episodeViews = models.IntegerField(blank=True, null=True, verbose_name='Episode Views')
    episodeLikes = models.IntegerField(blank=True, null=True, verbose_name='Episode Likes')
    episodeDislikes = models.IntegerField(blank=True, null=True, verbose_name='Episode Dislikes')
    episode_is_for18Plus = models.CharField(max_length=3, verbose_name="Episode is for 18+")
    episodePublishType = models.CharField(max_length=5, verbose_name="Episode Publish Type")
    laterEpisodeTime = models.TimeField(default=None)
    laterEpisodeDate = models.DateField(default=None)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s" % self.episodeName  

class DistributorManagment(models.Model):
    # distributorID = models.BigIntegerField(verbose_name="Distributor id")
    distributorEmail = models.EmailField(max_length=100 ,verbose_name="Distributor Email")
    distributorName = models.CharField(max_length=500, verbose_name="Distributor Name")
    distributorPhoneNumber = models.CharField(max_length=15, verbose_name="Distributor Phone Number")
    distributorPassword = models.CharField(max_length=250, verbose_name="Distributor Password")
    companyName = models.CharField(max_length=200, verbose_name="Company Name")
    companyLogo = models.FileField(upload_to='OTT/static/image/company/logo', verbose_name='Company Logo', null=True, blank=True,
                             validators=[validators.validate_file_extension_image])
    payment = models.CharField(max_length=20, verbose_name="Payment")
    commission = models.CharField(max_length=20, verbose_name="Commission")
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return "%s" % self.distributorName

class AdvertisorManagment(models.Model):
    # advertisorID = models.BigIntegerField(verbose_name="Advertisor id")
    advertisorEmail = models.EmailField(max_length=100 ,verbose_name="Advertisor Email")
    advertisorName = models.CharField(max_length=500, verbose_name="Advertisor Name")
    advertisorPhoneNumber = models.CharField(max_length=15, verbose_name="Advertisor Phone Number")
    advertisorPassword = models.CharField(max_length=250, verbose_name="Advertisor Password")
    companyName = models.CharField(max_length=200, verbose_name="Company Name")
    companyLogo = models.FileField(upload_to='OTT/static/image/company/logo', verbose_name='Company Logo', null=True, blank=True,
                             validators=[validators.validate_file_extension_image])
    payment = models.CharField(max_length=20, verbose_name="Payment")
    commission = models.CharField(max_length=20, verbose_name="Commission")
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return "%s" % self.advertisorName


class Advertise(models.Model):
    # advertiseID = models.BigIntegerField(verbose_name="Advertise id")
    advertiseName = models.CharField(max_length=500 ,verbose_name="Advertise Name")
    advertisorID = models.ForeignKey(AdvertisorManagment, related_name="advertisor_name", verbose_name="Advertisor Name", null=True, on_delete=models.CASCADE, default=None)
    advertiseDescription = models.TextField(verbose_name="Advertise Description", null=True,blank=True) 
    advertiseThumbnail = models.FileField(upload_to='OTT/static/image/advertise/thumbnail', verbose_name='Advertise Thumbail', null=True, blank=True,
                             validators=[validators.validate_file_extension_image])
    advertiseDuration = models.CharField(max_length=50, verbose_name="Advertise Durations")
    advertiseLink_360p = models.CharField(max_length=500, verbose_name="Advertise Link 360p")
    advertiseLink_480p = models.CharField(max_length=500, verbose_name="Advertise Link 480p")
    advertiseLink_720p = models.CharField(max_length=500, verbose_name="Advertise Link 720p")
    advertiseLink_1080p = models.CharField(max_length=500, verbose_name="Advertise Link 1080p")
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return "%s" % self.advertiseName

class LiveStream(models.Model):
    # streamID = models.BigIntegerField(verbose_name="Stream id")
    streamCategory = models.ForeignKey(Category, related_name="Stream_category", verbose_name="Category", null=True, on_delete=models.CASCADE, default=None)
    channelName = models.CharField(max_length=500 ,verbose_name="Channel Name")
    streamThumbnail = models.FileField(upload_to='OTT/static/image/liveStream/thumbnail', verbose_name='Stream Thumbail', null=True, blank=True,
                             validators=[validators.validate_file_extension_image])
    streamPoster = models.FileField(upload_to='OTT/static/image/liveStream/poster', verbose_name='Stream Poster', null=True, blank=True,
                             validators=[validators.validate_file_extension_image])
    channelURL = models.CharField(max_length=500 ,verbose_name="Channel URL")
    streamType = models.CharField(max_length=10, verbose_name="Stream Type",default=None)
    paidAmount = models.IntegerField(blank=True, null=True, verbose_name='Paid Amount')
    
    streamPublishType = models.CharField(max_length=10, verbose_name="Stream Publish Type")
    upcomingStreamTime = models.TimeField(default=None, verbose_name='Upcoming Stream Time')
    upcomingStreamDate = models.DateField(default=None, verbose_name='Upcoming Stream Date')
    active = models.CharField(max_length=3, verbose_name="is Stream Active", default='yes')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s" % self.channelName

class slideBanner(models.Model):
    # bannerID = models.BigIntegerField(verbose_name="Banner id")
    videoType = models.CharField(max_length=25 ,verbose_name="Video Type")
    sliderTitle = models.CharField(max_length=200 ,verbose_name="Slider Title")
    movie = models.ForeignKey(Movie, related_name="select_movie", verbose_name="Movie", null=True, on_delete=models.CASCADE, default=None)
    series = models.ForeignKey(Series, related_name="select_series", verbose_name="Series", null=True, on_delete=models.CASCADE, default=None)
    stream = models.ForeignKey(LiveStream, related_name="select_stream", verbose_name="Live Stream", null=True, on_delete=models.CASCADE, default=None)
    streamThumbnail = models.FileField(upload_to='OTT/static/image/Slider', verbose_name='Slider Image', null=True, blank=True,
                             validators=[validators.validate_file_extension_image])
    active = models.CharField(max_length=3, verbose_name="is slider Active", default='no')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s" % self.sliderTitle
 

class Wishlist(models.Model):
    # wishlistID = models.BigIntegerField(verbose_name="Wishlist id")
    mainUser = models.CharField(max_length=500 ,verbose_name="Main User")
    profileID = models.CharField(max_length=500 ,verbose_name="Profile Name")
    movie = models.ForeignKey(Movie, related_name="wishlist_movie", verbose_name="Movie", null=True, on_delete=models.CASCADE, default=None)
    series = models.ForeignKey(Series, related_name="wishlist_series", verbose_name="Series", null=True, on_delete=models.CASCADE, default=None)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return "%s" % self.mainUser

class Transaction(models.Model):
    # transactionID = models.BigIntegerField(verbose_name="Transaction id")
    email = models.CharField(max_length=100 ,verbose_name="Email")
    phoneNumber = models.CharField(max_length=15, verbose_name="Phone Number") 
    # userID = models.ForeignKey(UserDetails, related_name="user", verbose_name="User ID", null=True, on_delete=models.CASCADE, default=None)
    subscriptionPlan = models.ForeignKey(Subscription, related_name="subscription_plan", verbose_name="Subscription Plan", null=True, on_delete=models.CASCADE, default=None)
    amount = models.IntegerField(blank=True, null=True, verbose_name='Amount')
    paymentID = models.CharField(max_length=500 ,verbose_name="Payment ID")
    paymentDateTime = models.DateTimeField(auto_now_add=True, verbose_name='Payment Time Date')
    transactionStatus  = models.CharField(max_length=10 ,verbose_name="Transaction Status")

    def __str__(self):
        return "%s" % self.transactionID