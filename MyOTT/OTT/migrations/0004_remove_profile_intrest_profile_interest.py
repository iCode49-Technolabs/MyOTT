# Generated by Django 4.1.7 on 2023-03-27 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('OTT', '0003_alter_userdetail_facebookid_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='intrest',
        ),
        migrations.AddField(
            model_name='profile',
            name='interest',
            field=models.TextField(blank=True, null=True, verbose_name='Interest'),
        ),
    ]
