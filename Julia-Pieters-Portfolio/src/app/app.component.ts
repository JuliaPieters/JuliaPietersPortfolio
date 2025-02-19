import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'Julia-Pieters-Portfolio';
  openHome() {
    this.router.navigate(['/']);
  }
  openProjects() {
    this.router.navigate(['/projects']);
  }
  openAbout() {
    this.router.navigate(['/about']);
  }
}
