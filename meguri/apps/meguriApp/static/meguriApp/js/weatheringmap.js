function initMap() {
  var tokyo = {lat: 35.6762, lng: 139.6503};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: tokyo});
  var locations = [
      ['Tabata Station, Tokyo', 35.7382, 139.7608],
      ['Tokyo City View And Sky Deck, Roppongi', 35.6603, 139.7291],
      ['Shinjuku O-Guard', 35.696972, 139.717834]
  ];
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(35.6762, 139.6503),
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