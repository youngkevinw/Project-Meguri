function initMap() {
    // The location of Uluru
    var tokyo = {lat: 35.6762, lng: 139.6503};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 8, center: tokyo});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: tokyo, map: map});
  }