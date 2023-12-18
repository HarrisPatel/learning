import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterfood0',
  standalone: true
})
export class Filterfood0Pipe implements PipeTransform {

  transform(resturantArray: any, ...args: unknown[]): any {
    
    const type:any = args[0]
    let res = resturantArray.filter((e:any,)=>{return e.type == type});
    return res;
   }

}
