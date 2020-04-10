import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { UsersComponent } from './modules/users/users.component';
import { NotificationsComponent } from './modules/notifications/notifications.component';
import { StatsComponent } from './modules/stats/stats.component';


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
  }
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
