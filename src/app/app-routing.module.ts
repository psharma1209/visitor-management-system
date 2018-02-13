import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/Router";
import { LoginComponent } from "./login/login.component";
import { VisitorsComponent } from "./visitors/visitors.component";
import { VisitorsListComponent } from "./visitors/visitors-list/visitors-list.component";
import { VisitorRegistrationComponent } from "./visitors/visitor-registration/visitor-registration.component";
import { VisitorDetailsComponent } from "./visitors/visitor-details/visitor-details.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "visitors",
    component: VisitorsComponent,
    children: [
      {
        path: "visitor-list",
        component: VisitorsListComponent
      },
      {
        path: "visitor-registration",
        component: VisitorRegistrationComponent
      },
      {
        path: "visitor-details/:id",
        component: VisitorDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
