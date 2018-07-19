import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'isActive',
    pure: false
})
export class IsActiveFilterPipe implements PipeTransform {
    transform(items: any[], filter: boolean): any {
        if (!items) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.active === filter);
    }
}
