import { Component, Input, Output, EventEmitter, NgModule, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Search } from '../services/search';

@Component({
  selector: 'app-navbar-user',
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar-user.html',
  styleUrl: './navbar-user.scss',
})
export class NavbarUser {
  @Input({ required: true }) title!: string

  @Output() interfaceSelectionnee = new EventEmitter<'user' | 'dev'>();

  interfaceSelectionneeLocale: 'user' | 'dev' = 'user';

  constructor(private readonly router: Router) { }

  SelectionnerInterface(userOuDev: 'user' | 'dev') {
    this.interfaceSelectionneeLocale = userOuDev;
    this.interfaceSelectionnee.emit(userOuDev);
    this.router.navigate(['/']);
  }

  private readonly search = inject(Search);

  onSearch(value: string) {
  this.search.query.set(value);
}

}