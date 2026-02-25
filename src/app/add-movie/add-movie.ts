import { Component, inject } from '@angular/core';
import { Movie } from '../models/movie';
import { FormsModule } from '@angular/forms';
import { MoviesApi } from '../services/movies-api';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.scss',
})
export class AddMovie {
  movie: Movie = {
    title: '',
    director: '',
    releaseDate: new Date(),
    synopsis: '',
    id: undefined,
    rate: undefined, 
    image: undefined
  }
  private readonly moviesApi = inject(MoviesApi)
  private router =inject(Router)
  
  addMovie(): void {
    this.moviesApi.addMovie(this.movie).subscribe(
        () => this.router.navigate(['/movies'])
    );
  }
}
