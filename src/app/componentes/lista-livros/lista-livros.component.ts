import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livros/livro';
import { livros } from '../livros/mock-livros';
import { GeneroLiterarioComponent } from "../genero-literario/genero-literario.component";

@Component({
  selector: 'app-lista-livros',
  standalone: true,
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit {

  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

  ngOnInit() {
    this.livrosPorGenero = new Map();

    livros.forEach((livro) => {
      const generoId = livro.genero.id;
      if(!this.livrosPorGenero.has(generoId)){
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(livro);
    });

    this.generos = [
        {
          id: 'romance',
          value: "Romance",
          livros: this.livrosPorGenero.get("romance") ?? []
        },
        {
          id: 'misterio',
          value: 'Mistério',
          livros: this.livrosPorGenero.get("misterio") ?? []
      },
      {
        id: 'aventura',
        value: 'Aventura',
        livros: this.livrosPorGenero.get("aventura") ?? []
    },
    {
      id: 'magia',
      value: 'Magia',
      livros: this.livrosPorGenero.get("magia") ?? []
  }
    ];

    console.log(this.livrosPorGenero)
  }
}
