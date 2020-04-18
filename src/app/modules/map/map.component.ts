import { Component, AfterViewInit } from '@angular/core';
import { latLng } from 'leaflet';
import * as L from 'leaflet';



declare const google: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {



  map;

  smallIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

  constructor() { }

  ngAfterViewInit(): void {
    this.createMap();
  }

  createMap() {
    const arudy = {
      lat: 43.1166700,
      lng: -0.4333300,
    };
     const pau = {
      lat: 43.3,
      lng: -0.3667,
    };
    const laruns = {
      lat:  42.9883,
      lng:  -0.4266,
    }

    const zoomLevel = 12;
    this.map = L.map('map', {
      center: [laruns.lat, laruns.lng],
      zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 8,
      maxZoom: 17,
    });

    mainLayer.addTo(this.map);
    const dLaruns = 
    'Laruns (en béarnais Laruntz) est une commune française, située dans le département des Pyrénées-Atlantiques en région Nouvelle-Aquitaine.'
    const dArudy = 'Arudy (en béarnais Arúdi) est une commune française.'
    const dPau = 'La ville se situe au cœur du Béarn.'
    this.addMarker(arudy, dArudy);
    this.addMarker(pau, dPau);
    this.addMarker(laruns, dLaruns);

  }

  addMarker(coords, text) {

    const marker = L.marker([coords.lat, coords.lng], { icon: this.smallIcon });
    marker.addTo(this.map).bindPopup(text);

  }
}
