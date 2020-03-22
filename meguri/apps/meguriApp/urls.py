from django.conf.urls import url
from . import views
                    
urlpatterns = [
    url(r'^$', views.index),
    url(r'^filter$', views.mainfilter),
    url(r'^results$', views.results),
	url(r'^locations/(?P<id>\d+)$', views.locations),
	url(r'^currentlocation$', views.userip),
	url(r"^dashboard$", views.dashboard),
	# url(r"^addseries$", views.addseries),
]
