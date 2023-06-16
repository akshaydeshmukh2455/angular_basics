import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-com',
  templateUrl: './child-com.component.html',
  styleUrls: ['./child-com.component.css']
})
export class ChildComComponent implements OnInit{
constructor(){}
@Input() item=0;
  ngOnInit(): void {
      
  }
}
