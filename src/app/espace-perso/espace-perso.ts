import { Component } from '@angular/core';
import { Watchlist } from '../services/watchlist';
import { Movie } from '../models/movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-espace-perso',
  imports: [CommonModule],
  templateUrl: './espace-perso.html',
  styleUrl: './espace-perso.scss',
})
export class EspacePerso {
  constructor(private watchlist: Watchlist) {}

  

  remove(title:string):void{
    this.watchlist.remove(title);
    
  }

  get movies() :Movie[]{
    return this.watchlist.getAll();
  }
}
