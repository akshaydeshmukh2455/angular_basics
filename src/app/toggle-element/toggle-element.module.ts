import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToggleComComponent } from './toggle-com/toggle-com.component';



@NgModule({
  declarations: [
    ToggleComComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ToggleComComponent
  ]
})
export class ToggleElementModule { }
