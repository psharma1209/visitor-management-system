import { Component, OnInit } from "@angular/core";
import { VisitorService } from "../visitor-service.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-visitor-details",
  templateUrl: "./visitor-details.component.html",
  styleUrls: ["./visitor-details.component.css"]
})
export class VisitorDetailsComponent implements OnInit {
  visitorsDetails: Subscription;
  constructor(private service: VisitorService) {
    console.log(location.href);
    this.service.getVisitorsList().subscribe(val => console.log(val));
  }

  ngOnInit() {
    if (window.localStorage.getItem("visitorDetails")) {
      this.visitorsDetails = JSON.parse(
        window.localStorage.getItem("visitorDetails")
      );
    }
  }
}
