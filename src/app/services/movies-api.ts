import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MoviesApi {
  private readonly  httpClient = inject(HttpClient)
  private readonly url = "http://localhost:8080/movies"

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url);
  }
  addMovie(movie: Movie): Observable<Movie> {
      return this.httpClient.post<Movie>(this.url, movie);
  }
  deleteMovie(id: number): Observable<void> { 
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  getMovie(): Observable<Movie>{
    return this.getMovies().pipe(map(movies => movies[Math.floor(Math.random() * movies.length)]));
  }
}
