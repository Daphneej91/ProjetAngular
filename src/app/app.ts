import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { MoviesList } from './movies-list/movies-list';
import { NavbarDev } from './navbar-dev/navbar-dev';
import { NavbarUser } from './navbar-user/navbar-user';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, MoviesList, NavbarDev, NavbarUser],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProjetTD1');

  interfaceSelectionnee: string = 'user'; // valeur par défaut

  onInterfaceSelectionnee(value: string) {
    this.interfaceSelectionnee = value;
  }
}
