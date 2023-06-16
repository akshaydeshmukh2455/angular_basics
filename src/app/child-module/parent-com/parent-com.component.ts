import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-com',
  templateUrl: './parent-com.component.html',
  styleUrls: ['./parent-com.component.css']
})
export class ParentComComponent {
data=10;

updateChild(){
  this.data=Math.floor(Math.random()*10)
}
}
