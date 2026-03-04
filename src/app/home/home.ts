import { Component, inject } from '@angular/core';
import { MoviesApi } from '../services/movies-api';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import {AsyncPipe, CommonModule, DatePipe} from "@angular/common";
import { MovieCard } from './movie-card/movie-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, DatePipe, MovieCard,CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly moviesApi = inject(MoviesApi)
  movies$: Observable<Movie[]> = this.moviesApi.getMovies()

  

  
}
