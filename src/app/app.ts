import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { MoviesList } from './movies-list/movies-list';
import { NavbarDev } from './navbar-dev/navbar-dev';
import { NavbarUser } from './navbar-user/navbar-user';
import { FooterComponent } from './footer/footer';
import { InterfaceService } from './services/interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, MoviesList, NavbarDev, NavbarUser, FooterComponent, AsyncPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

  protected readonly title = signal('GrandEcran');

  constructor(private interfaceService: InterfaceService) { }

  get mode$() {
    return this.interfaceService.mode$;
  }
}
