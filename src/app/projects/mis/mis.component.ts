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
  selector: 'app-mis',
  imports: [
    CountUpModule,
    Dialog,
    MailComponent,
    Timeline
  ],
  templateUrl: './mis.component.html',
  styleUrl: './mis.component.scss'
})
export class MisComponent implements OnInit, AfterViewInit {
   visible: boolean = false 
      events!: EventItem[]
    
      constructor() {
        this.events = [
          { 
            title: 'Real-Time Price Tracking', 
            subText: 'Live market prices across multiple counties and trading centers, updated daily to help farmers time their sales for maximum profit.'
          },
          { 
            title: 'AI-Powered Forecasting', 
            subText: 'Machine learning algorithms predict price trends, seasonal patterns, and market demands up to 6 months in advance.'
          },
          { 
            title: 'Value Chain Analytics', 
            subText: 'Comprehensive data on 48 crops and livestock value chains including maize, beans, dairy, poultry, vegetables, and cash crops.'
          },
          { 
            title: 'Weather Integration', 
            subText: 'Localized weather forecasts integrated with planting calendars and market projections to optimize farming decisions.'
          },
          { 
            title: 'Supply & Demand Insights', 
            subText: 'Track market gaps, surplus areas, and demand hotspots to connect farmers with the best buyers.'
          },
          { 
            title: 'Mobile & USSD Access', 
            subText: 'Available via smartphone app, SMS, and USSD codes (*384*96#) for farmers without internet access.'
          },
          { 
            title: 'Policy Dashboard"', 
            subText: 'Data visualization tools for government agencies, NGOs, and development partners to inform agricultural policies.'
          },
          { 
            title: 'Quality Standards Guide', 
            subText: 'Information on grading, certification, and quality requirements for different markets and buyers.'
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
