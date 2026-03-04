import { Component } from '@angular/core';
import { UsersApi } from '../services/users-api';
import { Authentification } from '../services/authentification';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InterfaceService } from '../services/interface';

@Component({
  selector: 'app-connexion',
  imports: [FormsModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.scss',
})
export class Connexion {
  email: string = '';
  errorMessage: string = '';

  constructor(
    private auth: Authentification,
    private router: Router,
    private interfaceService: InterfaceService
  ) { }

  seConnecter() {
    this.auth.login(this.email).subscribe(user => {
      if (user) {
        const mode = user.points === 1 ? 'dev' : 'user';
        this.interfaceService.setMode(mode);
        this.router.navigate(['/']);
      } else {
        this.errorMessage = "Utilisateur introuvable";
      }
    });
  }
}