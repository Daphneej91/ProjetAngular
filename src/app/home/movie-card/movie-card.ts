import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { Watchlist } from '../../services/watchlist';
import { Panier } from '../../services/panier';


@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  @Input({required: true}) movie!: Movie

  constructor(private watchlist: Watchlist, private panier: Panier) {}

  add():void{
    //var bouton = document.getElementById("liste");
    if (this.watchlist.isInList(this.movie.title)==false){
      //bouton!.innerHTML="Retirer des favoris";
      this.watchlist.add(this.movie);
    }
    else{
     // bouton!.innerHTML="Ajouter aux favoris";
      this.watchlist.remove(this.movie.title)
    }
   
  }

  inList():boolean{
    if (this.watchlist.isInList(this.movie.title)==false){
      return true
    }
    else{
      return false
    }
  }

  addpanier():void{
    if (this.panier.isInList(this.movie.title)==false){
      this.panier.add(this.movie);
    }
    else{
      this.panier.remove(this.movie.title);
    }
  }

  inpanier():boolean{
    if (this.panier.isInList(this.movie.title)==false){
      return true
    }
    else{
      return false
    }
  }
  


  
 
  
  
  

}
