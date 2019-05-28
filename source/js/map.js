function initMap()
{
  var position = {lat: 34.756882, lng: -111.735194};
  var options = {
    center: position,
    zoom: 7,
    scrollwheel: false,
  };

  var myMap = new google.maps.Map(document.getElementById('map'), options);
  var marker = new google.maps.Marker({
    position: {lat: 34.656882, lng: -111.735194},
    map: myMap,
    icon: 'img/icon-map-marker.svg',
  });
}
