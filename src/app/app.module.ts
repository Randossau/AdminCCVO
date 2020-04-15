import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { MapComponent } from './modules/map/map.component';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
