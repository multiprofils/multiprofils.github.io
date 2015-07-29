//*

//*/
function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(48.096918, -1.978071),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
	disableDefaultUI: true
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)
    map.set('styles',[
	{
	    "featureType": "road.highway",
	    "elementType": "geometry",
	    "stylers": [
		{"color": "#ff0066"},
		{"visibility": "simplified"}]
	}, {
	    "featureType": "road",
	    "elementType": "labels",
	    "stylers": [{"hue": "#ff0066"}]
	}, {
	    "featureType": "landscape",
	    "stylers": [{"color": "#ffffff"}]
	}, {
	    "featureType": "poi",
	    "stylers": [{"visibility": "off"}]
	}, {
	    "featureType": "road.arterial",
	    "elementType": "geometry",
	    "stylers": [
		{"color": "#999999"},
		{"visibility": "simplified"}]
	}, {
	    "featureType": "road.local",
	    "elementType": "geometry",
	    "stylers": [
		{"visibility": "simplified"},
		{"color": "#bbbbbb"}]
	}, {
	    "featureType": "water",
	    "stylers": [{ "hue": "#ff0066" }]
	}, {
	    "featureType": "administrative",
	    "elementType": "labels",
	    "stylers": [
		{"visibility": "simplified"},
		{"color": "#999999"}]
	}
    ]);
    var marker = new google.maps.Marker({
	map: map,
	animation: google.maps.Animation.DROP,
	position: new google.maps.LatLng(48.036833, -1.819001),
	icon: 'img/map_icon.png',
    });
}


google.maps.event.addDomListener(window, 'load', initialize);
