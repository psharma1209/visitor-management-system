import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "visitorSearch"
})
export class VisitorSearchPipe implements PipeTransform {
  transform(value: any, input: string, searchList: any): any {
    if (input) {
      input = input.toLowerCase();
      return value.filter(function(el: any) {
        let correctValue = false;
        for (let i = 0; i < searchList.length; i++) {
          let r = el[searchList[i]];
          console.log(el[searchList[i]]);
          if (el[searchList[i]].toLowerCase().indexOf(input) > -1) {
            correctValue = true;
          }
          if (correctValue) {
            return el;
          }
        }
      });
    }
    return value;
  }
}
