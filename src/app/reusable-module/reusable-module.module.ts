import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReusableChildComComponent } from './reusable-child-com/reusable-child-com.component';
import { ReusableParentComComponent } from './reusable-parent-com/reusable-parent-com.component';



@NgModule({
  declarations: [
  
    ReusableParentComComponent,
    ReusableChildComComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReusableParentComComponent,
    ReusableChildComComponent
  ]
})
export class ReusableModuleModule { }
