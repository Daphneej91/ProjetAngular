import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarAno } from './navbar-ano/navbar-ano';
import { NavbarDev } from './navbar-dev/navbar-dev';
import { NavbarUser } from './navbar-user/navbar-user';
import { FooterComponent } from './footer/footer';
import { InterfaceService } from './services/interface';
import { AsyncPipe } from '@angular/common';
import { Authentification } from './services/authentification';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarDev, NavbarUser, FooterComponent, AsyncPipe, NavbarAno],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  protected readonly title = signal('GrandEcran');

  constructor(
    private interfaceService: InterfaceService,
    private auth: Authentification
  ) {
    this.auth.currentUser$.subscribe(() => {
      this.interfaceService.setMode(this.auth.currentMode);
    });
  }

  get mode$() {
    return this.interfaceService.mode$;
  }

  changerMode(role: 'dev' | 'user') {
    this.interfaceService.setMode(role);
  }
}

