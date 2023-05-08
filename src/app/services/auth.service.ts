import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LoginResponse } from '../models/response/LoginResponse';
import { LoginRequest } from '../models/request/LoginRequest';
import { environment } from 'src/environments/environment';
import { User } from '../models/dto/User';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    const url = `${environment.authApi}/login`;
    return this.http.post<LoginResponse>(url, credentials).pipe(
      map(res => {
        if (res && res.access_token) {
          localStorage.setItem(environment.jwtTokenStorageKey, res.access_token);
        }
        return res;
      })
    );
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? true : false;
  }

  logout(): void {
    localStorage.removeItem(environment.jwtTokenStorageKey);
  }

  getToken(): string | null {
    return localStorage.getItem(environment.jwtTokenStorageKey);
  }

  getUser(): Observable<User> {
    const url = `${environment.authApi}/user`;
    return this.http.get<User>(url);
  }
}