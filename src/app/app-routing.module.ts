import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UsersComponent } from './modules/users/users.component';
import { NotificationsComponent } from './modules/notifications/notifications.component';
import { StatsComponent } from './modules/stats/stats.component';
import { MapComponent } from './modules/map/map.component';
import { ParcoursComponent } from './modules/parcours/parcours.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AddParcoursComponent } from './modules/parcours/add-parcours/add-parcours.component';



const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'statistics',
    component: StatsComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'parcours',
    component: ParcoursComponent,
  },
  {
    path: 'add-parcours',
    component: AddParcoursComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  }
]
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // RouterModule.forChild(parentModuleRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
