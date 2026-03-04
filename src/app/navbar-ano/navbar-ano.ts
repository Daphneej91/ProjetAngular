import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-ano',
  imports: [FormsModule, RouterLink],
  templateUrl: './navbar-ano.html',
  styleUrl: './navbar-ano.scss',
})
export class NavbarAno {

  searchText: string = '';
}
