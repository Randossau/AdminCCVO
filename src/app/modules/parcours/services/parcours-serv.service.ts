import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IParcours } from '../../parcours/parcoursDataModel/parcoursInterface';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ParcoursServService {

  parcoursCollection: AngularFirestoreCollection<IParcours>;
  parcours: Observable<IParcours[]>;
  parcoursDoc: AngularFirestoreDocument<IParcours>;

  // itemsCollection: AngularFirestoreCollection<Item>;
  // items: Observable<Item[]>;
  // itemDoc: AngularFirestoreDocument<Item>;


  constructor(public afs: AngularFirestore) {
    // this.items = this.afs.collection('items').valueChanges()
    this.parcoursCollection = this.afs.collection('parcours', ref => ref.orderBy('titre', 'asc'));

    this.parcours = this.parcoursCollection.snapshotChanges()
      .pipe(map(changes => {
          return changes.map(a => {
            const data = a.payload.doc.data() as IParcours;
              data.id = a.payload.doc.id;
                return data;
          })
    })
  )}
  //  getParcours(){
  //    return this.items;
  //  }

  getParcours(){
    return this.parcours;
  }
}
