import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { InterfaceService } from '../services/interface';
import { Authentification } from '../services/authentification';

@Component({
  selector: 'app-navbar-user',
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar-user.html',
  styleUrl: './navbar-user.scss',
})
export class NavbarUser {
  @Input({ required: true }) title!: string

  constructor(private readonly router: Router, private interfaceService: InterfaceService, private auth: Authentification) { }

  selectionnerDev() {
    this.interfaceService.setMode('dev');
    this.router.navigate(['/']);
  }

  selectionnerUser() {
    this.interfaceService.setMode('user');
    this.router.navigate(['/']);
  }

  searchText: string = '';

  deconnexion() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
