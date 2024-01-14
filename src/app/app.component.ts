import { APP_INITIALIZER, Component } from '@angular/core';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-mazer';
}
