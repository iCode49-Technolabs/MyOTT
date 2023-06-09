# Generated by Django 4.1.7 on 2023-04-03 04:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('OTT', '0005_alter_subscription_subscriptionduration_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='movieDuration',
            field=models.CharField(max_length=50, null=True, verbose_name='Movie Durations'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='movieLink_1080p',
            field=models.CharField(max_length=500, null=True, verbose_name='Movie Link 1080p'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='movieLink_360p',
            field=models.CharField(max_length=500, null=True, verbose_name='Movie Link 360p'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='movieLink_480p',
            field=models.CharField(max_length=500, null=True, verbose_name='Movie Link 480p'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='movieLink_720p',
            field=models.CharField(max_length=500, null=True, verbose_name='Movie Link 720p'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='moviePublishType',
            field=models.CharField(max_length=5, null=True, verbose_name='Movie Publish Type'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='movieTrailer',
            field=models.CharField(max_length=500, null=True, verbose_name='Movie Trailer'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='movie_is_for18Plus',
            field=models.CharField(max_length=3, null=True, verbose_name='movie is for 18+'),
        ),
    ]
