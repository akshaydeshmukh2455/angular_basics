import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-loop-com',
  templateUrl: './nested-loop-com.component.html',
  styleUrls: ['./nested-loop-com.component.css']
})
export class NestedLoopComComponent {
users=[
{name:'anil',phone:'1234',socialAccounts:['facebook','insta','gmail']},
{name:'ram',phone:'234',socialAccounts:['google','fb','snapchat']},
{name:'piyush',phone:'567',socialAccounts:['gmail','insta','messenger']},
{name:'neha',phone:'9876',socialAccounts:['yahoo','insta','gmail']}];
}
