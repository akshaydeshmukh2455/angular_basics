import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop-com',
  templateUrl: './for-loop-com.component.html',
  styleUrls: ['./for-loop-com.component.css']
})
export class ForLoopComComponent {
users=['Anil','Ram','Ashu','Neha','Piyush'];
userDetails=[
{name:'Anil',email:'anil@gmail.com',phone:'345'},
{name:'Ram',email:'ram@gmail.com',phone:'1213'},
{name:'Ashu',email:'ashu@gmail.com',phone:'3415'},
{name:'Neha',email:'neha@gmail.com',phone:'4546'},
{name:'Piyush',email:'piyush@gmail.com',phone:'324'}];
}
