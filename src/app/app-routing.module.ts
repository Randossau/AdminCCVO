import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { PostsComponent } from "./modules/posts/posts.component";
import { UsersComponent } from "./modules/users/users.component";
import { NotificationsComponent } from "./modules/notifications/notifications.component";
import { StatsComponent } from "./modules/stats/stats.component";
import { MapComponent } from "./modules/map/map.component";
import { ParcoursComponent } from "./modules/parcours/parcours.component";
import { ContactComponent } from "./modules/contact/contact.component";
import { AddParcoursComponent } from "./modules/parcours/add-parcours/add-parcours.component";
import { IncidentsComponent } from "./modules/incidents/incidents.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegistrationComponent } from "./auth/registration/registration.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegistrationComponent,
  },
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "posts",
        component: PostsComponent,
      },
      {
        path: "users",
        component: UsersComponent,
      },
      {
        path: "incidents",
        component: IncidentsComponent,
      },
      {
        path: "notifications",
        component: NotificationsComponent,
      },
      {
        path: "statistics",
        component: StatsComponent,
      },
      {
        path: "map",
        component: MapComponent,
      },
      {
        path: "parcours",
        component: ParcoursComponent,
      },
      {
        path: "add-parcours",
        component: AddParcoursComponent,
      },
      {
        path: "contact",
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forChild(parentModuleRoutes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
