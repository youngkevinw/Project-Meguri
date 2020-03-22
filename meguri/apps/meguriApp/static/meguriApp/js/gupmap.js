function initMap() {
    var yamanashi = {lat: 35.6999972, lng: 138.6833306};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 8, center: yamanashi});
    var locations = [
        ['Oarai station (front)', 36.3141372, 140.5632649],
        ['Oarai station mae tori', 36.3125767, 140.5617023]
    ];
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(36.3134, 140.5749),
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