import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialogConfig } from '@angular/material/dialog/dialog-config';
import { MatDialog } from '@angular/material/dialog';
import { IncidentComponent } from './incident/incident.component';

export interface Incidents {
  no: number;
  libelle: string;
  type: string;
  lieu: string;
  date_incident: string;
  user: string;

}

const DATA: Incidents[] = [
  {no: 1, libelle: 'Problème', type: 'Sentier impraticable', lieu: 'trois croix', date_incident: '04/02/2020', user: '04/03/2020',},
  {no: 2, libelle: 'Nid de guêpes', type: 'Animaux/Insecte', lieu: 'fontaine esteret', date_incident: '04/02/2020', user: '04/03/2020',},
  {no: 3, libelle: 'Route barrée', type: 'Sentier impraticable', lieu: 'jurade', date_incident: '04/02/2020', user: '04/03/2020',},
  {no: 4, libelle: 'Panneau illisible', type: 'Balisage', lieu: 'cinq monts', date_incident: '02/02/2020', user: '04/03/2020',},
  {no: 5, libelle: 'Troupeau', type: 'Animaux/Insecte', lieu: 'lac du lurien', date_incident: '04/02/2020', user: '04/03/2020',},
  {no: 6, libelle: 'Inondations', type: 'Sentier impraticable', lieu: 'larroun', date_incident: '08/02/2020', user: '04/03/2020',},
  {no: 7, libelle: 'Arbre mort', type: 'Végétation gênante', lieu: 'trois croix', date_incident: '04/02/2020', user: '04/03/2020',},
  {no: 8, libelle: 'Ronces', type: 'Végétation gênante', lieu: 'piemont du rey', date_incident: '15/02/2020', user: '04/03/2020',},
  {no: 9, libelle: 'Arbre tombé', type: 'Sentier impraticable', lieu: 'artourste', date_incident: '06/02/2020', user: '04/03/2020',},
];


@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})

export class IncidentsComponent implements OnInit {
  displayedColumns: string[] = ['no', 'nom', 'prenom', 'email', 'date_creation', 'derniere_connexion','actions'];
  dataSource = new MatTableDataSource<Incidents>(DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog) { }

  ngOnInit(): void {
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
    this.dialog.open(IncidentComponent);
  }

}
