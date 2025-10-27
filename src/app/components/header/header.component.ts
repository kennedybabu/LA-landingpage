import { Component, ViewChild, ElementRef,inject, AfterViewInit, Output, EventEmitter } from '@angular/core';
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
  @Output() scrollToSection = new EventEmitter<string>();
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

  viewWhatWeDo(sectionId: string) {
    this.router.navigate(['/']);
    this.sideBarShowing = false;
    this.scrollToSection.emit(sectionId)
  }

}
