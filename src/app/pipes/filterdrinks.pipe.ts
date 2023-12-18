import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdrinks',
  standalone: true
})
export class FilterdrinksPipe implements PipeTransform {

  transform(resturantArray: any, ...args: unknown[]): any {
    let res = resturantArray.filter((e:any)=>{return e.type == 'Drink'});
    return res;
   }

}
