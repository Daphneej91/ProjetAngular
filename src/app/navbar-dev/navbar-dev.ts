import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { InterfaceService } from '../services/interface';

@Component({
  selector: 'app-navbar-dev',
  imports: [RouterLink],
  templateUrl: './navbar-dev.html',
  styleUrl: './navbar-dev.scss',
})
export class NavbarDev {
  @Input({ required: true }) title!: string

  constructor(private readonly router: Router, private interfaceService: InterfaceService) { }

  selectionnerDev() {
    this.interfaceService.setMode('dev');
    this.router.navigate(['/']);
  }

  selectionnerUser() {
    this.interfaceService.setMode('user');
    this.router.navigate(['/']);
  }
}
