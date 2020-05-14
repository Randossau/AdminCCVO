import { Component, OnInit } from '@angular/core';
import { IncidentsI } from '../services/incidentInterface';
import { IncidentServService } from '../services/incident-serv.service';


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


  panelOpenState = true;

  incident: IncidentsI[];

  constructor(private incidentServ: IncidentServService) { }

  ngOnInit(): void {
    this.incidentServ.getIncident().subscribe(incidents => {
      console.log(incidents);
      this.incident = incidents;
    });
  }

  tiles: Tile[] = [
    {text: 'Photo', cols: 4, rows: 3, color: 'yellowgreen'},
  ];

}
