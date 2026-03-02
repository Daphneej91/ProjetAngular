import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { MoviesList } from './movies-list/movies-list';
<<<<<<< HEAD
import { Nav } from './nav/nav';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Home, MoviesList, Nav, FooterComponent],
=======
import { NavbarDev } from './navbar-dev/navbar-dev';
import { NavbarUser } from './navbar-user/navbar-user';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, MoviesList, NavbarDev, NavbarUser],
>>>>>>> cd656cc2f2bd6673d21dac7845bedf37228bdacf
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('ProjetTD1');
<<<<<<< HEAD
}
=======

  interfaceSelectionnee: 'user' | 'dev' = 'user';

  changerInterface(nouvelleInterface: 'user' | 'dev') {
    this.interfaceSelectionnee = nouvelleInterface;
  }
}
>>>>>>> cd656cc2f2bd6673d21dac7845bedf37228bdacf
