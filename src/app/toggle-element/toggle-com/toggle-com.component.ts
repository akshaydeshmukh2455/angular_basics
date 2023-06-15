import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-com',
  templateUrl: './toggle-com.component.html',
  styleUrls: ['./toggle-com.component.css'],
})
export class ToggleComComponent {
  display = true;
  toggle() {
    this.display = !this.display;
  }
}
