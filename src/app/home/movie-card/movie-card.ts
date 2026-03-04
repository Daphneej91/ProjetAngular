import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { Watchlist } from '../../services/watchlist';
import { Panier } from '../../services/panier';
import { InterfaceService } from '../../services/interface';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-movie-card',
  imports: [AsyncPipe],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  @Input({ required: true }) movie!: Movie

  constructor(private watchlist: Watchlist, private panier: Panier, private interfaceService: InterfaceService) { }

  add(): void {
    this.watchlist.add(this.movie);

  }

  addpanier(): void {
    this.panier.add(this.movie);
  }

  get mode$() {
    return this.interfaceService.mode$;
  }
}
