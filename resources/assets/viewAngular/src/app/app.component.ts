import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private posts: Post[] = [
    new Post ("Joao", "Meu post", "Sub Joao", "joao@gmail.com", "minha msg"),
    new Post ("Laiza", "Meu post", "Sub Laiza", "Laiza@gmail.com", "minha msg"),
    new Post ("Maycon", "Meu post", "Sub Maycon", "Maycon@gmail.com", "minha msg"),
    new Post ("Joao", "Meu post", "Sub Joao", "joao@gmail.com", "minha msg"),
    new Post ("Laiza", "Meu post", "Sub Laiza", "Laiza@gmail.com", "minha msg"),
    new Post ("Maycon", "Meu post", "Sub Maycon", "Maycon@gmail.com", "minha msg"),
    new Post ("Joao", "Meu post", "Sub Joao", "joao@gmail.com", "minha msg"),
    new Post ("Laiza", "Meu post", "Sub Laiza", "Laiza@gmail.com", "minha msg"),
    new Post ("Maycon", "Meu post", "Sub Maycon", "Maycon@gmail.com", "minha msg"),
  ]
}
