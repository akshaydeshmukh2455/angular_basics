import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gretter',

})
// @Pipe({
//   name: 'prime',

// })
export class CustomPipesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value>10)
    {
      return "Number is greater than 10";
    }
    else
    {
      return "Number is less than 10"
    }

    // if(value%2==0 || value/2==0){
    //   return "Number is prime";
    // }
    // else{
    //   return "Number is non-prime";
    // }
    
  }

}
