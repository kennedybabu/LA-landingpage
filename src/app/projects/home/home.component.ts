import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { WhoWeAreComponent } from "../../components/who-we-are/who-we-are.component";
import { PartnersComponent } from "../../components/partners/partners.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, WhoWeAreComponent, PartnersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  
   ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
