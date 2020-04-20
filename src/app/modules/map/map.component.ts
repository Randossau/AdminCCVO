import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

declare const google: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  // google maps zoom level
  zoom: number = 12;

  // initial center position for the map
  lat: number =  43.105543;
  lng: number = -0.428476;

  constructor() { }

  ngOnInit(): void {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  mapClicked($event: MouseEvent) {
      this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]


  // ngOnInit() {

  //   var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
  //   var mapOptions = {
  //       zoom: 13,
  //       center: myLatlng,
  //       scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
  //       styles: [{
  //           "featureType": "water",
  //           "stylers": [{
  //               "saturation": 43
  //           }, {
  //               "lightness": -11
  //           }, {
  //               "hue": "#0088ff"
  //           }]
  //       }, {
  //           "featureType": "road",
  //           "elementType": "geometry.fill",
  //           "stylers": [{
  //               "hue": "#ff0000"
  //           }, {
  //               "saturation": -100
  //           }, {
  //               "lightness": 99
  //           }]
  //       }, {
  //           "featureType": "road",
  //           "elementType": "geometry.stroke",
  //           "stylers": [{
  //               "color": "#808080"
  //           }, {
  //               "lightness": 54
  //           }]
  //       }, {
  //           "featureType": "landscape.man_made",
  //           "elementType": "geometry.fill",
  //           "stylers": [{
  //               "color": "#ece2d9"
  //           }]
  //       }, {
  //           "featureType": "poi.park",
  //           "elementType": "geometry.fill",
  //           "stylers": [{
  //               "color": "#ccdca1"
  //           }]
  //       }, {
  //           "featureType": "road",
  //           "elementType": "labels.text.fill",
  //           "stylers": [{
  //               "color": "#767676"
  //           }]
  //       }, {
  //           "featureType": "road",
  //           "elementType": "labels.text.stroke",
  //           "stylers": [{
  //               "color": "#ffffff"
  //           }]
  //       }, {
  //           "featureType": "poi",
  //           "stylers": [{
  //               "visibility": "off"
  //           }]
  //       }, {
  //           "featureType": "landscape.natural",
  //           "elementType": "geometry.fill",
  //           "stylers": [{
  //               "visibility": "on"
  //           }, {
  //               "color": "#b8cb93"
  //           }]
  //       }, {
  //           "featureType": "poi.park",
  //           "stylers": [{
  //               "visibility": "on"
  //           }]
  //       }, {
  //           "featureType": "poi.sports_complex",
  //           "stylers": [{
  //               "visibility": "on"
  //           }]
  //       }, {
  //           "featureType": "poi.medical",
  //           "stylers": [{
  //               "visibility": "on"
  //           }]
  //       }, {
  //           "featureType": "poi.business",
  //           "stylers": [{
  //               "visibility": "simplified"
  //           }]
  //       }]

  //   };
  //   var map = new google.maps.Map(document.getElementById("map"), mapOptions);

  //   var marker = new google.maps.Marker({
  //       position: myLatlng,
  //       title: "Hello World!"
  //   });

  //   // To add the marker to the map, call setMap();
  //   marker.setMap(map);
  // }

}

