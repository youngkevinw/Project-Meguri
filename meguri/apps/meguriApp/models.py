from django.db import models

# class prefecture (models.Model):
	# prefecture_name = models.CharField(max_length=255)

# class locations(models.Model):
    # location = models.CharField(max_length=255)
	
class Series (models.Model):
	title		= models.CharField(max_length=255)
	description	= models.TextField()
	# city
	# locations

class Location (models.Model):
	location	= models.CharField(max_length=255)
	description	= models.TextField(null=True)
	longitude	= models.FloatField(null=True)
	latitude	= models.FloatField(null=True)
	series		= models.ManyToManyField(Series, related_name="locations")

class City (models.Model):
	city_name	= models.CharField(max_length=255)
	series 		= models.ManyToManyField(Series, related_name="city")
    # city_in_prefecture = models.ForeignKey(prefecture, related_name = "prefecture_city", null=True)

