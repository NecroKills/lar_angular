import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpEvent } from '@angular/common/http';
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

  //metodo que salva o post no servidor
  salvar(post: Post, file: File){
    const uploadData = new FormData();
    uploadData.append('nome', post.nome);
    uploadData.append('email', post.email);
    uploadData.append('titulo', post.titulo);
    uploadData.append('subtitulo', post.subtitulo);
    uploadData.append('mensagem', post.mensagem);
    uploadData.append('arquivo', file, file.name);

    this.http.post("/api/", uploadData,{
      reportProgress: true, observe: 'events'
    }).subscribe(
      (event: any) => {
        if (event.type == HttpEventType.Response){
          let p: any = event.body;
          this.posts.push(
            new Post(p.nome,p.titulo, p.butitulo, p.email, p.mensagem, p.arquivo, p.id, p.likes)
          );
        }

        //Mostra a porcentagem do upload do arquivo
        if (event.type == HttpEventType.UploadProgress){
          console.log('UploadProgress');
          console.log(event);
        }
    })
  }

  //Pega o id do posts que esta dando like e procura esse id dentro do array de posts.
  //e vai pegar o like dele e atualizar no event.likes
  like(id: number) {
    this.http.get('/api/like/' + id).subscribe(
      (event: any) => {
        let p = this.posts.find((p) => p.id == id);
        p.likes = event.likes;
      }
    );
  }

  //Apaga o post do banco de dados, 
  //e se ele encontrar o objeto ele da um splice retirando o objeto que tem o id do array de posts;
  apagar(id: number){
    this.http.delete('/api/' + id).subscribe((event) => {
      let index = this.posts.findIndex((p) => p.id == id);
      if(index >=0)
      this.posts.splice(index, 1);
    });
  }




}
