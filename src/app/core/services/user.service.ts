import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_USERS_URL = `${environment.apiUrl}/user`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}


  getRolesByUser(user_id: string): Observable<RoleDto[]> {
    return this.http.get<any>(`${API_USERS_URL}/roles/${user_id}`);
  }
}
