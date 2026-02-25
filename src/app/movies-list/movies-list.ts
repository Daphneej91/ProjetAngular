import { Component, DestroyRef, inject } from '@angular/core';
import { Input } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesApi } from '../services/movies-api';
import { Observable } from 'rxjs';
import {AsyncPipe, DatePipe} from "@angular/common";
import { RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UpdateMovie } from "../update-movie/update-movie";

@Component({
  selector: 'app-movies-list',
  imports: [AsyncPipe, DatePipe, RouterLink, UpdateMovie],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss',
})
export class MoviesList {
  private readonly moviesApi = inject(MoviesApi)
  movies$: Observable<Movie[]> = this.moviesApi.getMovies()
  
  //@Input({required: true}) movie!: Movie
  private destroyRef = inject(DestroyRef) 
  
  movies: Movie[]=[];
  ngOnInit(): void {
    this.moviesApi.getMovies().subscribe(movies => this.movies = movies);
  }

  deleteMovie(id: number): void {
    this.moviesApi.deleteMovie(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => 
        this.movies = this.movies.filter(film => film.id !== id)
    );
  }
}
