import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CountUpModule } from 'ngx-countup'
import { PulseComponent } from "../../components/pulse/pulse.component";
import { gsap } from 'gsap'



@Component({
  selector: 'app-vsla',
  imports: [
    CountUpModule,
    PulseComponent
],
  templateUrl: './vsla.component.html',
  styleUrl: './vsla.component.scss'
})
export class VslaComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  ngAfterViewInit(): void {
    const container = document.querySelector(".stay-card")
    const images = gsap.utils.toArray(".img-wrapper img") as gsap.TweenTarget[];

    images.forEach((item, i) => {
      const rotation = i % 2 === 0 ? -5: 5;

      const randomX= gsap.utils.random(-50, 50, 10, true)
      const randomY= gsap.utils.random(-50, 50, 10, true)

      gsap.set(item, {
        transformOrigin: "center center",
        x: randomX,
        y: randomY,
        autoAlpha: 0,
        rotate: rotation
      })
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stay-card",
        start: "top 70%",
        end: "bottom 10%",
        scrub: 2,
        pin: true, 
        // markers: true, 
        onUpdate: (self) => {

        }
      }
    })

    tl.to(images, {
      autoAlpha: 1,
      duration: 1,
      stagger: .5,
      ease: "sine.out",
    }, ">+3")

    
  }

}
