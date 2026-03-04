import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { InterfaceService } from '../services/interface';

@Component({
  selector: 'app-navbar-user',
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar-user.html',
  styleUrl: './navbar-user.scss',
})
export class NavbarUser {
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

  searchText: string = '';
}
