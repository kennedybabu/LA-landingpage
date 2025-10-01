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
      "title": 1
    },
     {
      "title": 2
    },
     {
      "title": 3
    },
     {
      "title": 4
    },
     {
      "title": 5
    },
     {
      "title": 6
    }
  ]

}
