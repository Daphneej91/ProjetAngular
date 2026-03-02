import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Movie } from '../../models/movie';


@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  @Input({required: true}) movie!: Movie

  @Output() favorite = new EventEmitter<any>();
  @Output() buy = new EventEmitter<any>();

  toggleFavorite() {
    this.favorite.emit(this.movie);
  }

  buyNow() {
    this.buy.emit(this.movie);
  }

  
  
  

}
