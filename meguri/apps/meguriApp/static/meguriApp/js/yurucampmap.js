function initMap() {
    var yamanashi = {lat: 35.6999972, lng: 138.6833306};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 8, center: yamanashi});
    var locations = [
        ['Koan Camping Ground', 35.473183, 138.574764],
        ['Hottarakashi Camping Ground, Yatsubo', 35.693959, 138.653298]
    ];
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(35.6999972, 138.6833306),
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