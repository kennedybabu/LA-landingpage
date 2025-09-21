import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap'
import { PulseComponent } from "../pulse/pulse.component";

@Component({
  selector: 'app-hero-section',
  imports: [PulseComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements AfterViewInit {

  @ViewChild('text') text!: ElementRef

  ngAfterViewInit(): void {

    gsap.timeline().
    fromTo(this.text.nativeElement, {
      y: -80,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    })
  }

}
