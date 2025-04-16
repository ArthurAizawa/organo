import { Component, input } from '@angular/core';
import { Livro } from './livro';

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [],
  templateUrl: './livros.component.html',
  styleUrl: './livros.component.css'
})
export class LivrosComponent {

  livro = input.required<Livro>();

  alternarFavorito(){
    this.livro().favorito = !this.livro().favorito
  } 

}
