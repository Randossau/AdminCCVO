import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconRegistry } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { StatsComponent } from 'src/app/modules/stats/stats.component';
import { ParcoursComponent } from 'src/app/modules/parcours/parcours.component';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { NotificationsComponent } from 'src/app/modules/notifications/notifications.component';
import { AddParcoursComponent } from 'src/app/modules/parcours/add-parcours/add-parcours.component';
import { MapComponent } from 'src/app/modules/map/map.component';
import { ParcoursServService } from 'src/app/modules/parcours/services/parcours-serv.service';
import { ContactComponent } from 'src/app/modules/contact/contact.component';
// import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    StatsComponent,
    UsersComponent,
    ParcoursComponent,
    MapComponent,
    NotificationsComponent,
    AddParcoursComponent,
    ContactComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatBadgeModule,
    CdkTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAVeEO8BNdM2XZcsgTYdRxIbGvUR3w9u4A'
    // }),
  ],
  providers: [
    DashboardService,
    ParcoursServService
  ]
})
export class DefaultModule { }

export class MaterialModule {
  constructor(public matIconRegistry: MatIconRegistry) {
      // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  static forRoot(): ModuleWithProviders {
      return {
          ngModule: MaterialModule,
          providers: [MatIconRegistry]
      }
  }
}
