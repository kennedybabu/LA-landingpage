import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button'
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { WhoWeAreComponent } from "./components/who-we-are/who-we-are.component";
@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    ButtonModule,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    WhoWeAreComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lliffton';
}
