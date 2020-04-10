import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { StatsComponent } from 'src/app/modules/stats/stats.component';
import { UsersComponent } from 'src/app/modules/users/users.component';
import { NotificationsComponent } from 'src/app/modules/notifications/notifications.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    StatsComponent,
    UsersComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule
  ],
  providers: [
    DashboardService
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