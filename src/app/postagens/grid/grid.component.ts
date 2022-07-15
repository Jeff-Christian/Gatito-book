import { switchMap } from 'rxjs/operators';
import { PostagensService } from './../postagens.service';
import { UserService } from './../../autenticacao/user/user.service';
import { Postagens, Publicacao } from './../postagens';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  postagens$ !: Observable<Postagens>;

  constructor(
    private userService: UserService,
    private postagensService: PostagensService
  ) { }

  ngOnInit(): void {
    this.postagens$ = this.userService.returnUser().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.postagensService.postsUser(userName);
      })
    )

  }

}
