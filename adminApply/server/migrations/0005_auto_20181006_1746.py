# Generated by Django 2.0.1 on 2018-10-06 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0004_auto_20181006_1008'),
    ]

    operations = [
        migrations.AlterField(
            model_name='asp',
            name='audition1',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='asp',
            name='audition2',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='asp',
            name='audition3',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='asp',
            name='scale1',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='asp',
            name='scale2',
            field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name='asp',
            name='scale3',
            field=models.FloatField(null=True),
        ),
    ]
