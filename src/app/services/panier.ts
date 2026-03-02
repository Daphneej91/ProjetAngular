import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class Panier {
  private list:Movie[]=[];//创建一个空列表
  
    add(movie:Movie):void{
      if(!this.isInList(movie.title)){
        this.list.push({ ...movie });
      }
    }
    
    isInList(title:string):boolean{
      return this.list.some(m=>m.title===title);
  
    }
  
    remove(title:string):void{
      this.list=this.list.filter(m=>m.title!==m.title);
      
  
    }
  
    getAll():Movie[]{
      return this.list; 
    }

  
  
}
