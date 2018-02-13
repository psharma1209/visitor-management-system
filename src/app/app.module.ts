import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { VisitorsComponent } from "./visitors/visitors.component";
import { VisitorsListComponent } from "./visitors/visitors-list/visitors-list.component";
import { VisitorRegistrationComponent } from "./visitors/visitor-registration/visitor-registration.component";
import { VisitorService } from "./visitors/visitor-service.service";
import { VisitorSearchPipe } from "./visitors/visitor-search.pipe";
import { VisitorDetailsComponent } from "./visitors/visitor-details/visitor-details.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VisitorsComponent,
    VisitorsListComponent,
    VisitorRegistrationComponent,
    VisitorSearchPipe,
    VisitorDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [VisitorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
