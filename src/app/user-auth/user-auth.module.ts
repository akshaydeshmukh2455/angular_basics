import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';




@NgModule({
  declarations: [
    SignUpComponent,
    // LoginComponent
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SignUpComponent,
    // LoginComponent
    LoginComponent
  ]
})
export class UserAuthModule { }
