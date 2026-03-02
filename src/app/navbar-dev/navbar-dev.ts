import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-dev',
  imports: [RouterLink],
  templateUrl: './navbar-dev.html',
  styleUrl: './navbar-dev.scss',
})
export class NavbarDev {
  @Input({ required: true }) title!: string

  @Output() interfaceSelectionnee = new EventEmitter<'user' | 'dev'>();

  SelectionnerInterface(interfaceSelectionnee: 'user' | 'dev') {
    this.interfaceSelectionnee.emit(interfaceSelectionnee);
  }
}
