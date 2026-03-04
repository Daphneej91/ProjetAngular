import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UsersApi {
    private readonly http = inject(HttpClient);
    private readonly url = "http://localhost:8080/users";

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }

    getUserByEmail(email: string): Observable<User | undefined> {
        return this.getUsers().pipe(
            map(users => users.find(u => u.email === email))
        );
    }

    addUser(user: Partial<User>): Observable<User> {
        return this.http.post<User>(this.url, user);
    }
}