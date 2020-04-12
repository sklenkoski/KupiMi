import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersResponse, UserResponse } from '../responses/app-responses';
import { UserUpdateRequest, UserRequest } from '../requests/app-requests';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  public url: string = '//localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(this.url);
  }

  public getUser(id: String): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.url}/${id}`);
  }

  public createUser(user: UserRequest): Observable<{ }>{
    return this.http.post<{}>(`${this.url}/add`, user);
  }

  public updateUser(user: UserUpdateRequest): Observable<{ }>{
    return this.http.post<{}>(`${this.url}/update`, user);
  }

  public deleteUser(id: String): Observable<{ }> {
    return this.http.delete<{}>(`${this.url}/delete/${id}`);
  }
}
