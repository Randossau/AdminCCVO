import { Component, OnInit } from '@angular/core';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Libellé', cols:2, rows: 1, color: 'orange'},
    {text: 'Utilisateur', cols:2, rows: 1, color: 'orange'},
    {text: 'Description incident', cols: 4, rows: 2, color: 'yellowgreen'},
    {text: 'Photo', cols: 2, rows: 2, color: 'yellowgreen' },
    {text: 'Coordonnées GPS', cols: 2, rows: 2, color: 'yellowgreen'},
    {text: 'Statut et commentaires', cols: 4, rows: 1, color: 'orange'},
  ];

  constructor(
 
  ) { }

  ngOnInit(): void {
  }

}
