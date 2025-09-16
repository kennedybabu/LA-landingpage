import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  imports: [
    DrawerModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {


  @ViewChild('tray') tray!: ElementRef

  ngAfterViewInit(): void {
    gsap.timeline().
    fromTo(this.tray.nativeElement, {
      y: -50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    })
  }

  sideBarShowing: boolean = false

  toggleSideBar() {
    this.sideBarShowing = !this.sideBarShowing
  }

}
