$('.parallax').parallax();
var map, infoWindow;
function initMap() {
    var locations = [
        ['Suga Shrine Stairs, Yotsuya', 35.6854, 139.7224],
        ['Intersection behind Shinjuku Police Station', 35.69275, 139.6935639],
        ['Shintoshin Pedestrian Bridge Near Takarazuka University', 35.6937511, 139.6972028],
        ['Koan Camping Ground', 35.473183, 138.574764],
        ['Hottarakashi Camping Ground, Yatsubo', 35.693959, 138.653298],
        ['Tabata Station, Tokyo', 35.7382, 139.7608],
        ['Tokyo City View And Sky Deck, Roppongi', 35.6603, 139.7291],
        ['Shinjuku O-Guard', 35.696972, 139.717834],
        ['Ogawa Elementary School Shimozato Branch', 36.0443361, 139.2847118],
        ['Oarai station (front)', 36.3141372, 140.5632649],
        ['Oarai station mae tori', 36.3125767, 140.5617023],
  
    ];
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 12
    });
    infoWindow = new google.maps.InfoWindow;
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

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here! Go forth!');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
