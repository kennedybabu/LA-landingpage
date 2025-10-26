import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, inject } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { gsap } from 'gsap';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    DrawerModule,
    RouterLink
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {


  @ViewChild('tray') tray!: ElementRef
  private router = inject(Router)

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

  viewWhatWeDo() {
    this.router.navigate(['/']);
    this.sideBarShowing = false;
  }

}
