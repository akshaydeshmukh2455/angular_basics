import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-com',
  templateUrl: './pipes-com.component.html',
  styleUrls: ['./pipes-com.component.css']
})
export class PipesComComponent {
  title:string="Angular Basic Pipes"

  today=Date();

  num:number=20
  nm:number=2
}
