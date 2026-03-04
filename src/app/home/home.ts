import { Component, computed, inject } from '@angular/core';
import { MoviesApi } from '../services/movies-api';
import { Movie } from '../models/movie';
import { combineLatest, map, Observable, shareReplay } from 'rxjs';
import {AsyncPipe, CommonModule, DatePipe} from "@angular/common";
import { MovieCard } from './movie-card/movie-card';
import { FormsModule } from '@angular/forms';
import { Search } from '../services/search';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, DatePipe, MovieCard,CommonModule,FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly moviesApi = inject(MoviesApi)
  private readonly search = inject(Search);

  // 电影只拉一次
  private readonly movies$ = this.moviesApi.getMovies().pipe(shareReplay(1));

  // 把 movies$ 转成 signal
  private readonly moviesSignal = toSignal(this.movies$, { initialValue: [] });

  filteredMovies = computed(() => {
    const movies = this.moviesSignal();
    const s = this.search.query().trim().toLowerCase();
    if (!s) return movies;
    return movies.filter(m =>
      ((m.title ?? '') + '').toLowerCase().includes(s)
    );
  });

  

  
}
