# Generated by Django 4.1.7 on 2023-04-04 09:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('OTT', '0014_avatar'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='avtar',
        ),
        migrations.AddField(
            model_name='profile',
            name='avatar',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_id', to='OTT.avatar', verbose_name='Avatar'),
        ),
    ]