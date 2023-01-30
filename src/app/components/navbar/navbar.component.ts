import { Component } from '@angular/core';
import { faCube } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  faCube = faCube;
  showMobileMenu = false;

  constructor() {}

  hideMobileMenu(): void {
    setTimeout(() => {
      this.showMobileMenu = false;
    }, 100)
  }
}
