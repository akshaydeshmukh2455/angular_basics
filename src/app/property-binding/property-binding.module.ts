import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PropertyBindingComComponent } from './property-binding-com/property-binding-com.component';



@NgModule({
  declarations: [
    PropertyBindingComComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PropertyBindingComComponent
  ]
})
export class PropertyBindingModule { }
