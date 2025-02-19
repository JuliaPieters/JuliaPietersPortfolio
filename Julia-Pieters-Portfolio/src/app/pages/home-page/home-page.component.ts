import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private router: Router) {}
  openProjects() {
    this.router.navigate(['/projects']);
  }
  navigateToLinkedIn() {
    window.location.href = 'https://www.linkedin.com/in/julia-pieters-559766249/';
  }
}

