import { User } from './user';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>({});

  constructor(
    private tokenService: TokenService,
  ) {
    if (this.tokenService.verifyToken()) {
      this.codeJWT();
    }
  }

  private codeJWT(){
    const token = this.tokenService.returnToken();
    const user = jwtDecode(token) as User;
    this.userSubject.next(user);
  }

  returnUser(){
    return this.userSubject.asObservable();
  }

  saveToken(token: string){
    this.tokenService.saveToken(token);
    this.codeJWT();
  }

  logOut(){
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  logIn(){
    return this.tokenService.verifyToken();
  }


}
