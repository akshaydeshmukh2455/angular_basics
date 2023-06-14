import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding-com',
  templateUrl: './style-binding-com.component.html',
  styleUrls: ['./style-binding-com.component.css']
})
export class StyleBindingComComponent {
color="red"
bgColor="green"
updateColor()
{
  this.color="blue"
  this.bgColor="red"
}
}
