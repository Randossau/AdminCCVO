<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 6e390b9681ba7c77ab4810715d43549b38d25b00
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { MatDialogConfig } from '@angular/material/dialog';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ParcoursServService } from './modules/parcours/services/parcours-serv.service';
<<<<<<< HEAD
=======
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
>>>>>>> 432fb000c33ff9ee7bae78141d6152c8e2596e00

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DefaultModule } from "./layouts/default/default.module";
=======
>>>>>>> 6e390b9681ba7c77ab4810715d43549b38d25b00


@NgModule({
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 6e390b9681ba7c77ab4810715d43549b38d25b00
  declarations: [
    AppComponent,
  ],

<<<<<<< HEAD
=======
  declarations: [AppComponent],
>>>>>>> 432fb000c33ff9ee7bae78141d6152c8e2596e00
=======
  declarations: [AppComponent],

>>>>>>> 6e390b9681ba7c77ab4810715d43549b38d25b00
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    // MatDialogConfig,
    FlexLayoutModule,
    MatDialogModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],

<<<<<<< HEAD
<<<<<<< HEAD
  providers: [ParcoursServService],
  bootstrap: [AppComponent]

=======
  providers:[],
  bootstrap: [AppComponent],
>>>>>>> 432fb000c33ff9ee7bae78141d6152c8e2596e00
=======

  providers: [ParcoursServService],
  bootstrap: [AppComponent]
>>>>>>> 6e390b9681ba7c77ab4810715d43549b38d25b00
})
export class AppModule {}
