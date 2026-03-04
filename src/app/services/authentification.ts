// authentification.ts
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    points: number;
}

@Injectable({ providedIn: 'root' })
export class Authentification {
    private readonly http = inject(HttpClient);
    private readonly url = 'http://localhost:8080/users';

    private currentUserSubject = new BehaviorSubject<User | null>(null);
    currentUser$ = this.currentUserSubject.asObservable();

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url);
    }

    login(email: string): Observable<User | null> {
        return this.getUsers().pipe(map(users => {
            const user = users.find(u => u.email === email) || null;
            if (user) this.currentUserSubject.next(user);
            return user;
        })
        );
    }

    logout() {
        this.currentUserSubject.next(null);
    }

    get currentUser(): User | null {
        return this.currentUserSubject.value;
    }

    get currentMode(): 'dev' | 'user' | 'ano' {
        const user = this.currentUser;
        if (!user) return 'ano';
        return user.points === 1 ? 'dev' : 'user';
    }
}