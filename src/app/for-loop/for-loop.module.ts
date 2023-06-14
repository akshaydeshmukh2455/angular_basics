import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForLoopComComponent } from './for-loop-com/for-loop-com.component';



@NgModule({
  declarations: [
    ForLoopComComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ForLoopComComponent
  ]
})
export class ForLoopModule { }
