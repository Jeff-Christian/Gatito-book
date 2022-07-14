import { Router } from '@angular/router';
import { UserService } from './../../autenticacao/user/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent{

  user$ = this.userService.returnUser();

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  logOut(){
    this.userService.logOut();
    this.router.navigate(['']);
  }

}
