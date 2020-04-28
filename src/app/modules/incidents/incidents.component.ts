import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
<<<<<<< HEAD
<<<<<<< HEAD
// import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
=======
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
>>>>>>> 432fb000c33ff9ee7bae78141d6152c8e2596e00
=======

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

>>>>>>> 6e390b9681ba7c77ab4810715d43549b38d25b00
import { IncidentComponent } from './incident/incident.component';
import { IncidentsI } from './services/incidentInterface';
import { IncidentServService } from './services/incident-serv.service';
import { DataSource } from '@angular/cdk/table';

export interface Incidents {
  no: number;
  libelle: string;
  description: string;
  image: string;
  email: string;
  lieu: string;
  type: string;
}

const DATA: Incidents[] = [
  {no: 1,  description: 'Description incident ', email: 'A@gmail.com', image:'img.jpeg', libelle: 'Problème', type: 'Sentier impraticable', lieu: 'trois croix'},
  {no: 2,  description: 'Description incident  ', email: 'A@gmail.com', image:'img.jpeg', libelle: 'Nid de guêpes', type: 'Animaux/Insecte', lieu: 'fontaine esteret'},
  {no: 3,  description: 'Description incident ', email: 'A@gmail.com', image:'img.jpeg', libelle: 'Route barrée', type: 'Sentier impraticable', lieu: 'jurade'},
  {no: 4,  description: 'Description incident  ', email: 'A@gmail.com', image:'img.jpeg', libelle: 'Panneau illisible', type: 'Balisage', lieu: 'cinq monts'},
  {no: 5,  description: 'Description incident  ', email: 'A@gmail.com', image:'img.jpeg', libelle: 'Troupeau', type: 'Animaux/Insecte', lieu: 'lac du lurien'},
  {no: 6,  description: 'Description incident  ', email: 'A@gmail.com', image:'img.jpeg', libelle: 'Inondations', type: 'Sentier impraticable', lieu: 'larroun'},
  {no: 7,  description: 'Description incident  ', email: 'A@gmail.com', image:'img.jpeg', libelle: 'Arbre mort', type: 'Végétation gênante', lieu: 'trois croix'},
  {no: 8,  description: 'Description incident  ', email: 'A@gmail.com', image:'img.jpeg', libelle: 'Ronces', type: 'Végétation gênante', lieu: 'piemont du rey'},
  {no: 9,  description: 'Description incident  ', email: 'A@gmail.com', image:'img.jpeg', libelle: 'Arbre tombé', type: 'Sentier impraticable', lieu: 'artourste'},
];


@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})

export class IncidentsComponent implements OnInit {

  incident: IncidentsI[];

  displayedColumns: string[] = ['no', 'libelle','description','image', 'email', 'lieu', 'type', 'statut'];
  dataSource = new MatTableDataSource<Incidents>(DATA)


  // displayedColumns: string[] = ['no', 'nom', 'prenom', 'email', 'date_creation', 'derniere_connexion','actions'];
  // dataSource = new MatTableDataSource<IncidentsI[]>(incident);

  // incident: IncidentsI[];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog, 
    private incidentServ: IncidentServService,
    ) { }

    data: MatTableDataSource<any>;

  ngOnInit(): void {

    this.incidentServ.getIncident().subscribe(incidents => {
      console.log(incidents);
      this.incident = incidents;
    });
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    dialogConfig.height = '550px';

    this.dialog.open(IncidentComponent, dialogConfig);

   
  }

}
