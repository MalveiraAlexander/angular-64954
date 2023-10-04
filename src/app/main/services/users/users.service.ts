import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../../models/responses/users.response';

@Injectable()
export class UsersService {
  private readonly API_URL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.API_URL}users`);
  }
}
