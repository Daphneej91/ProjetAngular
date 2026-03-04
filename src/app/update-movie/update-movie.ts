import { Component, effect, inject, Input } from '@angular/core';
import { Movie } from '../models/movie';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesApi } from '../services/movies-api';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-movie',
  imports: [FormsModule, DatePipe],
  templateUrl: './update-movie.html',
  styleUrl: './update-movie.scss',
})
export class UpdateMovie {
  private route = inject(ActivatedRoute);
  id = this.route.snapshot.params['id'];
  private readonly moviesApi = inject(MoviesApi);
  $movie=this.moviesApi.getMoviebyId(this.id);
  movie=toSignal(this.$movie);
  title: string ="";
  director: string="";
  release: string = "";
  synopsis: string="";
  private router = inject(Router);

  constructor() {
    // Quand le film est chargé → on initialise les champs
    effect(() => {
      const m = this.movie();
      if (m) {
        this.title = m.title;
        this.director = m.director;
        this.release =new Date(m.releaseDate).toISOString().split('T')[0];
        this.synopsis = m.synopsis;
      }
    });
  }
  
  updateMovie(movies: Movie): void {
    let data: Movie
        data={
          "id": movies.id,
          "title": this.title,
          "director": this.director,
          "rate": 0,
          "releaseDate": new Date(this.release),
          "synopsis": this.synopsis,
          "image": "string"
        };

   this.moviesApi.update(data).subscribe(() => this.router.navigate(['/movies']));
   
  }
  


}
