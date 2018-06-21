import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greaterThanDate'
})
export class GreaterThanDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date();
    date.setHours(0,0,0,0);
    return value.filter((val, index) => {
      return new Date(val.date) >= date;
    })
  }

}
