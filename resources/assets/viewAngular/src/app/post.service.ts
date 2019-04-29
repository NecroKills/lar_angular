import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';

@Injectable()
export class PostService {
  
    public posts: Post[] = [
    new Post ("Joao", "Meu post", "Sub Joao", "joao@gmail.com", "minha msg"),
    new Post ("Laiza", "Meu post", "Sub Laiza", "Laiza@gmail.com", "minha msg"),
    new Post ("Maycon", "Meu post", "Sub Maycon", "Maycon@gmail.com", "minha msg"),
    new Post ("Joao", "Meu post", "Sub Joao", "joao@gmail.com", "minha msg"),
    new Post ("Laiza", "Meu post", "Sub Laiza", "Laiza@gmail.com", "minha msg"),
    new Post ("Maycon", "Meu post", "Sub Maycon", "Maycon@gmail.com", "minha msg"),
    new Post ("Joao", "Meu post", "Sub Joao", "joao@gmail.com", "minha msg"),
    new Post ("Laiza", "Meu post", "Sub Laiza", "Laiza@gmail.com", "minha msg"),
    new Post ("Maycon", "Meu post", "Sub Maycon", "Maycon@gmail.com", "minha msg"),
  ];
  constructor(HTTP: HttpClient) { }
}
