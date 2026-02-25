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

  @Output() SelectionInterface = new EventEmitter<string>();

  SelectionnerInterface(interfaceSelectionnee: string) {
    this.SelectionInterface.emit(interfaceSelectionnee);
  }
}
