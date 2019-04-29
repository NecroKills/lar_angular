import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable()
export class PostService {
  
    public posts: Post[] = [];

  //metodo construtor que recebe via construtor que vai retornar todos os posts do servidor
  constructor(private http: HttpClient) {
    this.http.get("/api/").subscribe(
      (posts: any[]) => {
        for(let p of posts){
          this.posts.push(
            new Post(p.nome,p.titulo, p.butitulo, p.email, p.mensagem, p.arquivo, p.id, p.likes)
          );
        }
      }
    );
   }
}
