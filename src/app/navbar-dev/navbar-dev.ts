import { Component, Input } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { InterfaceService } from '../services/interface';
import { Authentification } from '../services/authentification';

@Component({
  selector: 'app-navbar-dev',
  imports: [RouterLink],
  templateUrl: './navbar-dev.html',
  styleUrl: './navbar-dev.scss',
})
export class NavbarDev {
  @Input({ required: true }) title!: string

  constructor(private readonly router: Router, private interfaceService: InterfaceService, private auth: Authentification) { }

  deconnexion() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
  selectionnerDev() {
    this.interfaceService.setMode('dev');
    this.router.navigate(['/']);
  }

  selectionnerUser() {
    this.interfaceService.setMode('user');
    this.router.navigate(['/']);
  }
}
