import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface UtilisateursActifs {
  no: number;
  nom: string;
  prenom: string;
  email: string;
  date_creation: string;
  derniere_connexion: string;
  notifications: number;
}


const DATA: UtilisateursActifs[] = [
  {no: 1, nom: 'Albret', prenom: 'Louis', email: 'L@gmail.com', date_creation: '04/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 2, nom: 'Gontrand', prenom: 'Jean', email: 'H@gmail.com', date_creation: '04/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 3, nom: 'Albret', prenom: 'Louis', email: 'A@gmail.com', date_creation: '04/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 4, nom: 'Garde', prenom: 'Lucie', email: 'B@gmail.com', date_creation: '02/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 5, nom: 'Rollet', prenom: 'Louis', email: 'P@gmail.com', date_creation: '04/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 6, nom: 'Martin', prenom: 'Stephanie', email: 'v@gmail.com', date_creation: '08/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 7, nom: 'Gyignes', prenom: 'Louis', email: 'M@gmail.com', date_creation: '04/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 8, nom: 'Lambert', prenom: 'Louise', email: 'a@gmail.com', date_creation: '15/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 9, nom: 'Albret', prenom: 'Louis', email: 'H', date_creation: '06/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 10, nom: 'Deullet', prenom: 'Louis', email: 'H', date_creation: '04/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 11, nom: 'Albret', prenom: 'Louis', email: 'H', date_creation: '03/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 12, nom: 'Philippe', prenom: 'Louis', email: 'H', date_creation: '18/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 13, nom: 'Jean', prenom: 'Louis', email: 'H', date_creation: '04/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 14, nom: 'Albret', prenom: 'Louis', email: 'H', date_creation: '21/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 15, nom: 'Beranger', prenom: 'Louis', email: 'H', date_creation: '04/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 16, nom: 'Mas', prenom: 'Louis', email: 'H', date_creation: '22/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 17, nom: 'Leveque', prenom: 'Louis', email: 'H', date_creation: '19/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
  {no: 18, nom: 'Albret', prenom: 'Louis', email: 'H', date_creation: '04/02/2020', derniere_connexion: '04/03/2020', notifications: 0},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['no', 'nom', 'prenom', 'email', 'date_creation', 'derniere_connexion', 'notifications'];
  dataSource = new MatTableDataSource<UtilisateursActifs>(DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
