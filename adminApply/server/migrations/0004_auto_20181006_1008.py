# Generated by Django 2.0.1 on 2018-10-06 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0003_asp_name'),
    ]

    operations = [
        migrations.DeleteModel(
            name='SortMessage',
        ),
        migrations.AddField(
            model_name='asp',
            name='isAdjust',
            field=models.CharField(default=1, max_length=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='asp',
            name='tel',
            field=models.CharField(default=1, max_length=20),
            preserve_default=False,
        ),
    ]