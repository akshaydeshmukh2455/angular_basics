import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StyleBindingComComponent } from './style-binding-com/style-binding-com.component';



@NgModule({
  declarations: [
    StyleBindingComComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StyleBindingComComponent
  ]
})
export class StyleBindingModule { }
