import { Component } from '@angular/core';
import { Panier } from '../services/panier';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mon-panier',
  imports: [CommonModule],
  templateUrl: './mon-panier.html',
  styleUrl: './mon-panier.scss',
})
export class MonPanier {
  constructor(private panier: Panier) {}

  

  removepanier(title: string) {
    this.panier.remove(title);
    
  }

   get movies() {
    return this.panier.getAll();
  } 
}
