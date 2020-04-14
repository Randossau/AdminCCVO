import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface UtilisateursActifs {
  no: number;
  nom: string;
  prenom: string;
  email: string;
  date_creation: string;
  derniere_connexion: string;
}

const DATA: UtilisateursActifs[] = [
  {no: 1, nom: 'Albret', prenom: 'Louis', email: 'L@gmail.com', date_creation: '04/02/2020', derniere_connexion: '04/03/2020'},
  {no: 2, nom: 'Gontrand', prenom: 'Jean', email: 'H@gmail.com', date_creation: '04/02/2020', derniere_connexion: '04/03/2020'},
  {no: 3, nom: 'Albret', prenom: 'Louis', email: 'A@gmail.com', date_creation: '04/02/2020', derniere_connexion: '04/03/2020'},
  {no: 4, nom: 'Garde', prenom: 'Lucie', email: 'B@gmail.com', date_creation: '02/02/2020', derniere_connexion: '04/03/2020'},
  {no: 5, nom: 'Rollet', prenom: 'Louis', email: 'P@gmail.com', date_creation: '04/02/2020', derniere_connexion: '04/03/2020'},
  {no: 6, nom: 'Martin', prenom: 'Stephanie', email: 'v@gmail.com', date_creation: '08/02/2020', derniere_connexion: '04/03/2020'},
  {no: 7, nom: 'Gyignes', prenom: 'Louis', email: 'M@gmail.com', date_creation: '04/02/2020', derniere_connexion: '04/03/2020'},
  {no: 8, nom: 'Lambert', prenom: 'Louise', email: 'a@gmail.com', date_creation: '15/02/2020', derniere_connexion: '04/03/2020'},
  {no: 9, nom: 'Albret', prenom: 'Louis', email: 'H', date_creation: '06/02/2020', derniere_connexion: '04/03/2020'},
  {no: 10, nom: 'Deullet', prenom: 'Louis', email: 'H', date_creation: '04/02/2020', derniere_connexion: '04/03/2020'},
  {no: 11, nom: 'Albret', prenom: 'Louis', email: 'H', date_creation: '03/02/2020', derniere_connexion: '04/03/2020'},
  {no: 12, nom: 'Philippe', prenom: 'Louis', email: 'H', date_creation: '18/02/2020', derniere_connexion: '04/03/2020'},
  {no: 13, nom: 'Jean', prenom: 'Louis', email: 'H', date_creation: '04/02/2020', derniere_connexion: '04/03/2020'},
  {no: 14, nom: 'Albret', prenom: 'Louis', email: 'H', date_creation: '21/02/2020', derniere_connexion: '04/03/2020'},
  {no: 15, nom: 'Beranger', prenom: 'Louis', email: 'H', date_creation: '04/02/2020', derniere_connexion: '04/03/2020'},
  {no: 16, nom: 'Mas', prenom: 'Louis', email: 'H', date_creation: '22/02/2020', derniere_connexion: '04/03/2020'},
  {no: 17, nom: 'Leveque', prenom: 'Louis', email: 'H', date_creation: '19/02/2020', derniere_connexion: '04/03/2020'},
  {no: 18, nom: 'Albret', prenom: 'Louis', email: 'H', date_creation: '04/02/2020', derniere_connexion: '04/03/2020'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // bigChart = [];
  cards = [];
  pieChart = [];
  displayedColumns: string[] = ['no', 'nom', 'prenom', 'email', 'date_creation', 'derniere_connexion'];
  dataSource = new MatTableDataSource<UtilisateursActifs>(DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    // this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.dataSource.paginator = this.paginator;
  }

}
