import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomPipesPipe } from './custom-pipes.pipe';
import { PipesComComponent } from './pipes-com/pipes-com.component';
import { PrimeNumberPipe } from './prime-number.pipe';



@NgModule({
  declarations: [
    PipesComComponent,
    CustomPipesPipe,
    PrimeNumberPipe
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    PipesComComponent
  ]
})
export class PipesModule { }
