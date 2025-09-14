import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';


@Component({
  selector: 'app-header',
  imports: [
    DrawerModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  sideBarShowing: boolean = false

  toggleSideBar() {
    this.sideBarShowing = !this.sideBarShowing
  }

}
