import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwitchCaseComComponent } from './switch-case-com/switch-case-com.component';



@NgModule({
  declarations: [
    SwitchCaseComComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SwitchCaseComComponent
  ]
})
export class SwitchCaseModule { }
