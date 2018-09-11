

function initMap(){
	var nassau = { lat:25.073096, lng:-77.3169152};

	var map = new google.maps.Map(document.getElementById('map'),{
		zoom:17,
		center: nassau
	});

	var marker = new google.maps.Marker({
		position: nassau,
		map: map
	})
}