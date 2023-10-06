import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../../models/responses/users.response';
import { UserRequest } from '../../models/requests/user.request';

@Injectable()
export class UsersService {
  private readonly API_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.API_URL}users`);
  }

  getUser(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.API_URL}users/${id}`);
  }

  addUser(user: UserRequest) {
    return this.http.post(`${this.API_URL}users`, user);
  }

  editUser(user: UserRequest, id: number) {
    return this.http.put(`${this.API_URL}users/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.API_URL}users/${id}`);
  }
}
