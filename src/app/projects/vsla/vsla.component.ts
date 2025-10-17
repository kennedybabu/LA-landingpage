import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CountUpModule } from 'ngx-countup'
import { gsap } from 'gsap'
import { Dialog } from 'primeng/dialog';
import { MailComponent } from "../../components/mail/mail.component";
import { Timeline } from 'primeng/timeline';

interface EventItem {
  title? : string,
  subText? : string
}

@Component({
  selector: 'app-vsla',
  imports: [
    CountUpModule,
    Dialog,
    MailComponent,
    Timeline
],
  templateUrl: './vsla.component.html',
  styleUrl: './vsla.component.scss'
})


export class VslaComponent implements OnInit, AfterViewInit {

  visible: boolean = false 
  events!: EventItem[]

  constructor() {
    this.events = [
      { title: 'Group Registration', subText: 'Existing or new VSLA groups register on the platform with group constitution, member details, and elected officials.'},
      { title: 'Member Onboarding', subText: 'Each member gets a digital account linked to their mobile phone number. Initial training provided by Lliffton agents.'},
      { title: 'Digital Savings', subText: 'Members deposit savings via mobile money. Contributions tracked automatically with receipts sent via SMS.'},
      { title: 'Loan Applications', subText: 'Members apply for loans digitally. Group officials approve via the app. Funds disbursed to mobile money instantly.'},
      { title: 'Repayments & Interest', subText: 'Automated repayment schedules with SMS reminders. Interest calculated and distributed to members automatically.'},
      { title: 'Share-Out & Growth', subText: 'At cycle end, digital share-out with accurate calculations. Groups graduate to link with SACCOs and banks for larger financial services.'}
    ]
  }

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
