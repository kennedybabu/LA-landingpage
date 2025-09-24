import { Router, Routes } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  imports: [],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss'
})
export class WhoWeAreComponent {
  private router = inject(Router)

  viewProject() {
    this.router.navigate(['/vsla'])
  }

}
