# Generated by Django 3.0.3 on 2020-03-20 01:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20200320_0104'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='establishment',
            new_name='establishment_id',
        ),
    ]
