import { Component, OnInit } from "@angular/core";
import { VisitorService } from "../visitor-service.service";
import { VisitorSearchPipe } from "../visitor-search.pipe";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-visitors-list",
  templateUrl: "./visitors-list.component.html",
  styleUrls: ["./visitors-list.component.css"]
})
export class VisitorsListComponent implements OnInit {
  visitorList: {
    sNo: number;
    visitorName: string;
    purpose: string;
    contactPerson: string;
  }[];
  sNo = 4;
  newVisitor: any;
  searchList: string[];
  searchVisitor: string;

  constructor(private visitorService: VisitorService) {
    this.visitorService.getVisitorsList().subscribe(data => {
      console.log(data);
      //this.newVisitor.sNo = ++this.sNo;
      //this.visitorList.push(this.newVisitor);
    });
  }

  ngOnInit() {
    this.visitorList = [
      {
        sNo: 1,
        visitorName: "Pushpendra Sharma",
        purpose: "Interview",
        contactPerson: "Hidayath"
      },
      {
        sNo: 2,
        visitorName: "Rajesh Sharma",
        purpose: "Interview",
        contactPerson: "Hidayath"
      },
      {
        sNo: 3,
        visitorName: "Rajeev Sharma",
        purpose: "Interview",
        contactPerson: "Hidayath"
      },
      {
        sNo: 4,
        visitorName: "Pushpendra Sharma",
        purpose: "Interview",
        contactPerson: "Hidayath"
      }
    ];

    this.searchVisitor = "";

    this.searchList = ["visitorName", "purpose", "contactPerson"];

    if (window.localStorage.getItem("newVisitor")) {
      this.newVisitor = JSON.parse(window.localStorage.getItem("newVisitor"));
      this.newVisitor.sNo = ++this.sNo;
      this.visitorList.push(this.newVisitor);
    }

    //this.visitorService.changeData(this.visitorList);
  }

  public getDetails(id) {
    for (var i = 0; i < this.visitorList.length; i++) {
      if (this.visitorList[i].sNo === id) {
        this.visitorService.changeData(this.visitorList[i]);
        window.localStorage.setItem(
          "visitorDetails",
          JSON.stringify(this.visitorList[i])
        );
        location.assign("/visitors/visitor-details/" + id);
      }
    }
  }
}
