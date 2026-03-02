import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { MoviesList } from './movies-list/movies-list';
import { NavbarDev } from './navbar-dev/navbar-dev';
import { NavbarUser } from './navbar-user/navbar-user';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Home,
    MoviesList,
    NavbarDev,
    NavbarUser,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('GrandEcran');

  interfaceSelectionnee: 'user' | 'dev' = 'user';

  changerInterface(nouvelleInterface: 'user' | 'dev') {
    this.interfaceSelectionnee = nouvelleInterface;
  }
}