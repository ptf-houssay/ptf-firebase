var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var campus = { lat: crd.latitude, lng: crd.longitude };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: campus
  });
  var marker = new google.maps.Marker({
    position: campus,
    map: map
  });
}

function error(err) {
  console.warn("ERROR(" + err.code + "): " + err.message);
}

var coord = navigator.geolocation.getCurrentPosition(success, error, options);

function initMap() {
  var uluru = { lat: -25.363, lng: 131.044 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
console.log(coord);
