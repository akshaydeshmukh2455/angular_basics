import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IfElseComComponent } from './if-else-com/if-else-com.component';



@NgModule({
  declarations: [
    IfElseComComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IfElseComComponent
  ]
})
export class IfElseModule { }
