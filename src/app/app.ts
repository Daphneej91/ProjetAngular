import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { MoviesList } from './movies-list/movies-list';
import { Nav } from './nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Home,MoviesList,Nav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ProjetTD1');
}
