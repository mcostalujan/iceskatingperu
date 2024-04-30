import { UserModel } from './../../models/user.model_backup';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthModel } from '../../models/auth.model';
import { environment } from 'src/environments/environment';

const API_USERS_URL = `${environment.apiUrl}/user`;

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  constructor(private http: HttpClient) {}

  // public methods
  login(username: string, password: string): Observable<any> {
    return this.http.post<AuthModel>(`${API_USERS_URL}/login`, {
      username,
      password,
    });
  }

  // CREATE =>  POST: add a new user to the server
  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(API_USERS_URL, user);
  }

  // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
  forgotPassword(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${API_USERS_URL}/forgot-password`, {
      email,
    });
  }

  getUserByToken(token: string): Observable<UserModel> {
    const httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<UserModel>(`${API_USERS_URL}/me`, {
      headers: httpHeaders,
    });
  }
}
