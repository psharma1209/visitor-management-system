import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { VisitorService } from "../visitor-service.service";

@Component({
  selector: "app-visitor-registration",
  templateUrl: "./visitor-registration.component.html",
  styleUrls: ["./visitor-registration.component.css"]
})
export class VisitorRegistrationComponent implements OnInit {
  newVisitor: {
    visitorName: string;
    purpose: string;
    contactPerson: string;
  };

  successMessage: string;

  constructor(private visitorService: VisitorService) {}

  ngOnInit() {
    // this.visitorService.currentVisitor.subscribe(data => {
    //   this.newVisitor = data;
    // });
    this.newVisitor = {
      visitorName: "",
      purpose: "",
      contactPerson: ""
    };

    this.successMessage = "";
  }

  public registerVisitor() {
    this.successMessage = "Visitor successfully added ";
    window.localStorage.setItem("newVisitor", JSON.stringify(this.newVisitor));
    this.visitorService.changeData(this.newVisitor);
  }
}
