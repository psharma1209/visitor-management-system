import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";

export interface product {
  sNo: number;
  visitorName: string;
  purpose: string;
  contactPerson: string;
}

@Injectable()
export class VisitorService {
  newVisitor: {
    visitorName: string;
    purpose: string;
    contactPerson: string;
  };

  visitorsList: product[];

  private visitorData = new BehaviorSubject<any>({});

  changeData(visitor: any) {
    this.visitorData.next(visitor);
  }

  getVisitorsList(): Observable<any> {
    return this.visitorData.asObservable();
  }
}
