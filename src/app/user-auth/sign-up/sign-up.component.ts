import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: [
    '.sign-up{color:red}'
  ]
})
export class SignUpComponent {
//   displayVal='';
// getValue(val:string)
// {
//   console.warn(val)
//   this.displayVal=val
// }

//counter

// count=0;
// counter(type:string)
// {
//   type==='add' ? this.count++:this.count--
//   this.count++;
//   this.count--;
// }

//styling
// title='Hello';

userData:any={};

getData(data:NgForm){
console.warn(data)
this.userData=data;
}

}
