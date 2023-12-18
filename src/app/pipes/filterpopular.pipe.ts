import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpopular',
  standalone: true
})
export class FilterpopularPipe implements PipeTransform {

  transform(resturantArray: any, ...args: unknown[]): any {
   let res = resturantArray.filter((e:any)=>{return e.popular == true});
   return res;
  }

}
