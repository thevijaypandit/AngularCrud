import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  getAll() {
    return this._http.get<User[]>('${config.appUrl}/users')
  }
  register(user:User){
    return this._http.post('${config.apiUrl}/users/register', user);
  }
  delete(id:number){
    return this._http.delete('${config.apiUrl}/users/${id}');
  }
}
