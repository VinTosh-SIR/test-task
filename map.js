function initMap() {
    let markerImage = 'map-icon.svg';
    let mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(50.42830775180539, 30.52785736815787),
        disableDefaultUI: true,
        styles: [
            {
                "featureType": "landscape.natural",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            }
        ]
    };

    let mapElement = document.getElementById('map');
    let map = new google.maps.Map(mapElement, mapOptions);

    let cordinates = {lat: 50.42830775180539, lng: 30.52785736815787}

    let marker = new google.maps.Marker({
        icon: markerImage,
        position: cordinates,
        map: map,
    });

    let infoWindow = new google.maps.InfoWindow({
        content: '<h3 style="padding: 0; margin: 0">Voodoo</h3>' +
            '<p style="padding: 5px 0 5px 0; margin: 0;">137 Glasgov St, ' +
            '<div><p style="padding: 0 0 5px 0; margin: 0;">Unit 115 Kitchener, ON N2G 4X8</p></div>' +
            '<div><p style="margin: 0 0 5px 0;" >Ukraine</p></div>' +
            '<div><img src="tel.svg" style="padding: 0 0 0 5px margin: 0"/><a style="padding: 0 0 0 9px; color: #858585" ' +
            'href="tel:+18004809597">+1-800-480-9597</a></div>'+
            '<div><img src="mail.svg" style="padding: 0 0 0 5px margin: 0"/><a style="padding: 0 0 0 9px; color: #858585"' +
            ' href="mailto:info@voodoo.com">info@voodoo.com</a></div>',

    });
    infoWindow.open(map, marker);
}