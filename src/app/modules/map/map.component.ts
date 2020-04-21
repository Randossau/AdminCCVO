import { Component, OnInit, AfterViewInit } from '@angular/core';

// à utiliser lors de l'utilisation de AnfularGoogleMaps(agm)
//import { MouseEvent } from '@agm/core';

import * as L from 'leaflet';



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
    };
    const rebenac = {
      lat: 43.1599,
      lng: -0.396171,
    };
    const buzy = {
      lat: 43.133300,
      lng: -0.450000,
    }

    const zoomLevel = 13;
    this.map = L.map('map', {
      center: [buzy.lat, buzy.lng],
      zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 8,
      maxZoom: 17,
    });

    mainLayer.addTo(this.map);
    const dLaruns =
    'Laruns (en béarnais Laruntz) est une commune française, située dans le département des Pyrénées-Atlantiques en région Nouvelle-Aquitaine.'
    const dArudy = "Arudy, porte de la vallée d'Ossau : Occupée depuis 11 000 ans par l'homme pyrénéen, Arudy s'étend au centre d'un ancien bassin glaciaire, foyer du premier noyau d'habitat de la vallée d'Ossau. Le village d'Aruri ou Eruri, mentionné dès le XIIIe siècle prendra son nom définitif d'Arudy à la fin du Moyen-Age."
    const dPau = 'La ville se situe au cœur du Béarn.'
    const dRebenac = 'Rébénacq a été fondé en 1347. Son coeur historique, autour d’une pittoresque place centrale, le rattache aux villages médiévaux qualifiés de bastide…'
    const dBuzy = "La commune de Buzy, porte d'entrée de la vallée d'Ossau, se situe dans une zone de basse montagne du piémont béarnais. Collectivité du canton d'Arudy, elle est rattachée administrativement à la sous préfecture d'Oloron-Sainte-Marie, et se situe à une trentaine de kilomètre de Pau, chef lieu du département des Pyrénées Atlantiques, et à une quinzaine de kilomètres d'Oloron."
    this.addMarker(arudy, dArudy);
    this.addMarker(pau, dPau);
    this.addMarker(laruns, dLaruns);
    this.addMarker(rebenac, dRebenac);
    this.addMarker(buzy, dBuzy);
    


  }

  addMarker(coords, text) {

    const marker = L.marker([coords.lat, coords.lng], { icon: this.smallIcon });
    marker.addTo(this.map).bindPopup(text);

  }
}
