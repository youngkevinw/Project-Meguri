from django.shortcuts import render, redirect, HttpResponse
from .models import Series, City, Location

def index(request):
    return render(request, "meguriApp/index.html")

def mainfilter(request):
    return render(request, "meguriApp/mainfilter.html")

def results(request):
	city = request.POST["city"]
	
	if not City.objects.filter(city_name=city):		# adds city to DB
		City.objects.create ( city_name = city )
		
	context =	{
				"series" : City.objects.filter(city_name=city)[0].series.all(),
				}
	return render(request, "meguriApp/results.html", context)

def locations(request, id):
	context = {
		"this_series" : Series.objects.get(id=id),
	}
	return render(request, "meguriApp/locations/" + id + ".html", context)	

	
	
def dashboard(request):
	context =	{
				"series" : Series.objects.all()
				}
	return render (request, "meguriApp/dashboard.html", context)	

def userip(request):
	return render(request, "meguriApp/userip.html")
# def addseries (request):
	
	# if not request.POST["title"]:
		# return redirect (dashboard)
		
	# if not City.objects.filter(city_name=request.POST["city"]):
		# City.objects.create(city_name=request.POST["city"])							#adds city name if not already in DB

	# if not Series.objects.filter(title=request.POST["title"]):						#adds new series if not already in DB
		# new_series = Series.objects.create	(
											# title 		= request.POST["title"],
											# description	= request.POST["description"],
											# )
		# new_series.city.add(City.objects.get(city_name=request.POST["city"]))		#establishes many:many relationship
		# new_series.save()
		
	# if Series.objects.get(title=request.POST["title"]):
		# series_update = Series.objects.get(title=request.POST["title"])
		# if request.POST["city"]:
			# series_update.city.add(City.objects.get(city_name=request.POST["city"]))
			# series_update.save()
		# if request.POST["description"]:
			# series_update.description = request.POST["description"]
			# series_update.save()
				
								
	# return redirect (dashboard)
