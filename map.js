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
    map.set('styles', [
	{
	    featureType: 'road',
	    elementType: 'geometry.stroke',
	    stylers: [
		{ color: '#ff0066' },
		{ weight: 0.3 }
	    ]
	}, {
	    featureType: 'landscape',
	    elementType: 'geometry',
	    stylers: [
		{ color: '#ffffff' }
	    ]
	}
    ]);
    var marker = new google.maps.Marker({
	position: new google.maps.LatLng(48.036833, -1.819001),
	map: map,
	icon: 'img/map_icon.png',
});
}


google.maps.event.addDomListener(window, 'load', initialize);
