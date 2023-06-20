import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeNumber'
})
export class PrimeNumberPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value%2==0 || value/2==0){
      return "Number is prime";
    }
    else{
      return "Number is non-prime";
    }
  }

}
