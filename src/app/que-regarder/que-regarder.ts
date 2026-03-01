import { Component, inject } from '@angular/core';
import { MoviesApi } from '../services/movies-api';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import {AsyncPipe, DatePipe} from "@angular/common";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-que-regarder',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './que-regarder.html',
  styleUrl: './que-regarder.scss',
})
export class QueRegarder {
  private readonly moviesApi = inject(MoviesApi)
  movie$: Observable<Movie> = this.moviesApi.getMovie();
}
