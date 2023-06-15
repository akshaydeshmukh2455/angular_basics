import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComComponent } from './header-com/header-com.component';



@NgModule({
  declarations: [
    HeaderComComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComComponent
  ]
})
export class HeaderModule { }
