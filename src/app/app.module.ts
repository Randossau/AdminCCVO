import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { ParcoursServService } from './modules/parcours/services/parcours-serv.service';



@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    AngularFirestoreModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),  
  ],

  providers: [ParcoursServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
