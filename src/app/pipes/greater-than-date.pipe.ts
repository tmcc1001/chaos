import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greaterThanDate'
})
export class GreaterThanDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date();
    return value.filter((val, index) => {
      return new Date(val.date) >= date;
    })
  }

}
