import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-user',
  imports: [RouterLink],
  templateUrl: './navbar-user.html',
  styleUrl: './navbar-user.scss',
})
export class NavbarUser {
  @Input({ required: true }) title!: string

  @Output() interfaceSelectionnee = new EventEmitter<'user' | 'dev'>();

  SelectionnerInterface(interfaceSelectionnee: 'user' | 'dev') {
    this.interfaceSelectionnee.emit(interfaceSelectionnee);
  }
}
