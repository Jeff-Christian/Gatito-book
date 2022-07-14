import { PostagensService } from './../postagens.service';
import { UserService } from './../../autenticacao/user/user.service';
import { Postagens, Publicacao } from './../postagens';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  postagens!: Postagens

  constructor(
    private userService: UserService,
    private postagensService: PostagensService
  ) { }

  ngOnInit(): void {

    this.userService.returnUser().subscribe((user) => {
      const userName = user.name ?? '';
      this.postagensService.postsUser(userName).subscribe((postagens) => {
        this.postagens = postagens;
      })
    })

  }

}
