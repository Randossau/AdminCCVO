import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ParcoursServService } from 'src/app/modules/parcours/services/parcours-serv.service';
import { IParcours } from '../parcours/parcoursDataModel/parcoursInterface';
import * as L from 'leaflet';



export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class ParcoursComponent implements OnInit {

  panelOpenState = false;

  parcours: IParcours[];

  // constructor(private parcourServ: ParcoursServService) { }
  constructor(private parcourServ: ParcoursServService) { }

  ngOnInit(): void {
    this.parcourServ.getParcours().subscribe(parcours => {
      console.log(parcours);
      this.parcours = parcours;
    });
  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

}
