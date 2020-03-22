function initMap() {
  var tokyo = {lat: 35.6762, lng: 139.6503};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 8, center: tokyo});
  var locations = [
      ['Suga Shrine Stairs, Yotsuya', 35.6849137, 139.7231086],
      ['Intersection behind Shinjuku Police Station', 35.6925013, 139.6940243],
      ['Shintoshin Pedestrian Bridge Near Takarazuka University', 35.6937511, 139.6972028]
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