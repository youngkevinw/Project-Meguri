function initMap() {
  var saitama = {lat: 35.8616, lng: 139.6455};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 3, center: saitama});
  var locations = [
      ['Ogawa Elementary School Shimozato Branch', 36.0443361, 139.2847118],
  ];
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(35.8616, 139.6455),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) { 
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }
}