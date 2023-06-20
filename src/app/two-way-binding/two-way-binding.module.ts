import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComComponent } from './two-way-binding-com/two-way-binding-com.component';



@NgModule({
  declarations: [
    TwoWayBindingComComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TwoWayBindingComComponent
  ]
})
export class TwoWayBindingModule { }
