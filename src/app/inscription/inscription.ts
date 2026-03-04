import { Component } from '@angular/core';
import { Authentification } from '../services/authentification';
import { Router } from '@angular/router';
import { UsersApi } from '../services/users-api';
import { FormsModule } from '@angular/forms';
import { InterfaceService } from '../services/interface';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Component({
  selector: 'app-inscription',
  imports: [FormsModule],
  templateUrl: './inscription.html',
  styleUrl: './inscription.scss',
})
export class Inscription {
  firstName = '';
  lastName = '';
  age: number | null = null;
  email = '';
  points = 1; // par défaut user

  errorMessage = '';

  private readonly url = 'http://localhost:8080/users';

  constructor(
    private http: HttpClient,
    private auth: Authentification,
    private router: Router,
    private interfaceService: InterfaceService
  ) { }

  inscrire() {
    if (!this.firstName || !this.lastName || !this.age || !this.email) {
      this.errorMessage = 'Tous les champs sont obligatoires';
      return;
    }

    const newUser: User = {
      id: 0,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      email: this.email,
      points: this.points
    };

    this.http.post<User>(this.url, newUser).subscribe({
      next: user => {
        this.auth.login(user.email).subscribe(u => {
          if (u) {
            this.interfaceService.setMode('user');
            this.router.navigate(['/']);
          }
        });
      },
      error: err => {
        this.errorMessage = "Impossible de s'inscrire";
        console.error(err);
      }
    });
  }
}
