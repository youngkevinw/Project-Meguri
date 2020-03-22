from django.conf.urls import url, include
urlpatterns = [
    url(r'^', include('apps.meguriApp.urls')),	# use your app_name here
]
