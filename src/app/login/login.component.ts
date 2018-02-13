import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: { userName: string; password: string };
  constructor() {}

  ngOnInit() {
    this.user = {
      userName: "",
      password: ""
    };
  }

  public login() {
    location.assign("/visitors/visitor-list");
  }
}
