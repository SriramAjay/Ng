import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  transform(value: number, exponent?:number): number {
    return Math.pow(value,isNaN(exponent)?1:exponent);
  }

}
