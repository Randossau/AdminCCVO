import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAVeEO8BNdM2XZcsgTYdRxIbGvUR3w9u4A'
    })
  ],
})
export class MapModule {
}
