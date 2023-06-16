import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComComponent } from './child-com/child-com.component';
import { ParentComComponent } from './parent-com/parent-com.component';



@NgModule({
  declarations: [
    ParentComComponent,
    ChildComComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParentComComponent,
    ChildComComponent
  ]
})
export class ChildModuleModule { }
