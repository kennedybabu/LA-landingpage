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
  selector: 'app-agri-trade',
  standalone: true,
  imports: [
    CountUpModule,
    Dialog,
    MailComponent,
    Timeline
  ],
  templateUrl: './agri-trade.component.html',
  styleUrl: './agri-trade.component.scss'
})
export class AgriTradeComponent implements OnInit, AfterViewInit {
  visible: boolean = false 
    events!: EventItem[]
  
    constructor() {
      this.events = [
        { 
          title: 'Real-Time Price Comparison', 
          subText: 'Compare prices across multiple dealers and service providers. MIS integration ensures you\'re always getting fair market value.'
        },
        { 
          title: 'Verified Suppliers', 
          subText: 'All input dealers, service providers, and buyers are vetted for quality, reliability, and fair business practices.'
        },
        { 
          title: 'Secure Payments', 
          subText: 'Escrow system protects both buyers and sellers. Payment released only when products/services are delivered and confirmed.'
        },
        { 
          title: 'Group Buying Power', 
          subText: 'VSLA groups and cooperatives can pool orders for bulk discounts of 10-20% on inputs and services.'
        },
        { 
          title: 'Credit Integration', 
          subText: 'Buy now, pay later using your VSLA credit line or SACCO loans. Automatic repayment from harvest proceeds.'
        },
        { 
          title: 'Delivery Tracking', 
          subText: 'GPS tracking of deliveries with SMS updates. Know exactly when your inputs or equipment will arrive.'
        },
        { 
          title: 'Quality Assurance', 
          subText: 'Rating system for all transactions. Poor performers are flagged and removed to maintain marketplace quality.'
        },
        { 
          title: 'Multi-Language Support', 
          subText: 'Available in English, Swahili, and local languages. Voice-based navigation for farmers with low literacy.'
        }
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
