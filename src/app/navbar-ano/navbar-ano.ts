import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Search } from '../services/search';

@Component({
  selector: 'app-navbar-ano',
  imports: [FormsModule, RouterLink],
  templateUrl: './navbar-ano.html',
  styleUrl: './navbar-ano.scss',
})
export class NavbarAno {

  searchText: string = '';

  private readonly search = inject(Search);

  onSearch(value: string) {
    this.search.query.set(value);
  }
}
