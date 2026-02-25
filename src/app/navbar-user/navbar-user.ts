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

  @Output() SelectionInterface = new EventEmitter<string>();

  SelectionnerInterface(interfaceSelectionnee: string) {
    this.SelectionInterface.emit(interfaceSelectionnee);
  }
}
