import { Component } from '@angular/core';
import { LivrosComponent } from "../livros/livros.component";
import { livros } from '../livros/mock-livros';

@Component({
  selector: 'app-genero-literario',
  standalone: true,
  imports: [LivrosComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  livro = livros[0];
}
