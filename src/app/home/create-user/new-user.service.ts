import { environment } from './../../../environments/environment.prod';
import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(
    private http: HttpClient,
  ) { }

  signUp(newUser: NewUser){
    return this.http.post(`${API}/Uuser/signup`, newUser);
  }

  lookUserExist(nomeUsuario: string){
    return this.http.get(`${API}/user/exists/${nomeUsuario}`);
  }

}
