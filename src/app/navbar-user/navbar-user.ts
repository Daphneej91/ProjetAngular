import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

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

  SelectionnerInterface(userOuDev: 'user' | 'dev') {
    this.interfaceSelectionneeLocale = userOuDev;
    this.interfaceSelectionnee.emit(userOuDev);
  }

  searchText: string = '';
}
