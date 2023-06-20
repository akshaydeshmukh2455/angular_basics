import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';



@NgModule({
  declarations: [
    TemplateRefVarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TemplateRefVarComponent
  ]
})
export class TemplateRefVarModule { }
