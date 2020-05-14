import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { IncidentsI } from "./incidentInterface";
import { map } from "rxjs/operators";
import Timestamp = firestore.Timestamp;
import { firestore } from 'firebase/app';
import * as _ from 'lodash';


@Injectable({
  providedIn: "root",
})
export class IncidentServService {
  incidentCollection: AngularFirestoreCollection;
  incidentDoc: AngularFirestoreDocument;
  incident: Observable<IncidentsI[]>;

  constructor(public afs: AngularFirestore) {
    this.incidentCollection = this.afs.collection("incident", (ref) =>
      ref.orderBy("no", "asc")
    );
    this.incident = this.incidentCollection.snapshotChanges()
    .pipe(
      map((changes) => {
        return changes.map((x) => {
          const data = x.payload.doc.data() as IncidentsI;
          Object.keys(data).filter(key=>data[key] instanceof Timestamp)
            .forEach(key=>data[key]= data[key].toDate());
          data.id = x.payload.doc.id;
          return data;
        });
      })
    );
  }
  getIncident() {
    return this.incident;
  }

  // editCible(incident) {
  //   this.incident.forEach(_.omit(incident, ''));
  // }
}

