import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NestedLoopComComponent } from './nested-loop-com/nested-loop-com.component';



@NgModule({
  declarations: [
    NestedLoopComComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NestedLoopComComponent
  ]
})
export class NestedLoopModule { }
