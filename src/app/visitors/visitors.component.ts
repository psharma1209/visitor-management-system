import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-visitors",
  templateUrl: "./visitors.component.html",
  styleUrls: ["./visitors.component.css"]
})
export class VisitorsComponent implements OnInit {
  toggleMenu: boolean;
  constructor() {}

  ngOnInit() {}

  public showMenu() {
    this.toggleMenu = !this.toggleMenu;
  }
}
