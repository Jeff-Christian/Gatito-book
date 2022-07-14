import { environment } from './../../environments/environment.prod';
import { TokenService } from './../autenticacao/token.service';
import { Postagens } from './postagens';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
  ) { }

  postsUser(nomeDoUsuario: string): Observable<Postagens>{
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token', token);
    return this.httpClient.get<Postagens>(`${API}/${nomeDoUsuario}/photos`, {
      headers,
    });
  }

}
