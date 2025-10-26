import { AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';
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
  @ViewChild('subText') subText!: ElementRef
  @ViewChild('smallText') smallext!: ElementRef


  ngAfterViewInit(): void {

    gsap.timeline()
    .fromTo(this.smallext.nativeElement, {
    y: -50,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    ease: "power3.out"
  })
  .fromTo(this.text.nativeElement, {
    y: -40,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out"
  }, "-=0.8")
  .fromTo(this.subText.nativeElement, {
    y: -30,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.9,
    ease: "power3.out"
  }, "-=0.7")
  }

}
