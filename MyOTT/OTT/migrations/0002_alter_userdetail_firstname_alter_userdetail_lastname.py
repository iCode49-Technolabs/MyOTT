# Generated by Django 4.1.7 on 2023-03-25 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('OTT', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userdetail',
            name='firstName',
            field=models.CharField(max_length=200, null=True, verbose_name='First Name'),
        ),
        migrations.AlterField(
            model_name='userdetail',
            name='lastName',
            field=models.CharField(max_length=200, null=True, verbose_name='Last Name'),
        ),
    ]
