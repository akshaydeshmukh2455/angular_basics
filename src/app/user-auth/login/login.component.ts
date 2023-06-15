import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [MatRadioModule],
})
export class LoginComponent {

  getData(val:string)
  {
    console.warn(val)
  }

  title='hello';
}
