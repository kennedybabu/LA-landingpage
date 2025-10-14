import { Component } from '@angular/core';
import { Carousel } from 'primeng/carousel'


@Component({
  selector: 'app-partners',
  imports: [Carousel],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  icons: any[] = [
    {
      "image": "africa-harvest.png"
    },
    {
      "image": "action.png"
    },
    {
      "image": "cga.png"
    },
    {
      "image": "rti.png"
    },
    {
      "image": "sana.png"
    },
    {
      "image": "stckr.png"
    }
  ]

}
