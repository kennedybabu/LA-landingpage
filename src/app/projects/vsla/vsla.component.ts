import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CountUpModule } from 'ngx-countup'
import { gsap } from 'gsap'
import { Dialog } from 'primeng/dialog';
import { MailComponent } from "../../components/mail/mail.component";




@Component({
  selector: 'app-vsla',
  imports: [
    CountUpModule,
    Dialog,
    MailComponent
],
  templateUrl: './vsla.component.html',
  styleUrl: './vsla.component.scss'
})
export class VslaComponent implements OnInit, AfterViewInit {

  visible: boolean = false 

  showDialog() {
    this.visible = true
  }

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
        start: "top 50%",
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
