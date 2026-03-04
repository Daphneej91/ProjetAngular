import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MoviesList } from './movies-list/movies-list';
import { AddMovie } from './add-movie/add-movie';
import { QueRegarder } from './que-regarder/que-regarder';
import { EspacePerso } from './espace-perso/espace-perso';
import { MonPanier } from './mon-panier/mon-panier';
import { UpdateMovie } from './update-movie/update-movie';


export const routes: Routes = [
    { path: '', component: Home},
    { path: 'movies', component: MoviesList},
    { path: 'add-movie', component: AddMovie},
    { path: 'que-regarder', component: QueRegarder},
    { path: 'espace-perso', component: EspacePerso },
    { path: 'mon-panier', component: MonPanier },
    { path: 'update/:id', component: UpdateMovie},
]
