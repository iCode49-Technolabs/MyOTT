# Generated by Django 4.1.7 on 2023-04-03 05:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('OTT', '0008_alter_series_seriescast'),
    ]

    operations = [
        migrations.AlterField(
            model_name='series',
            name='seriesCast',
            field=models.ManyToManyField(blank=True, to='OTT.cast', verbose_name='Cast'),
        ),
    ]
