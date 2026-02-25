import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-movie',
  imports: [FormsModule],
  templateUrl: './update-movie.html',
  styleUrl: './update-movie.scss',
})
export class UpdateMovie {
  @Input({required: true}) movie!: Movie
}
