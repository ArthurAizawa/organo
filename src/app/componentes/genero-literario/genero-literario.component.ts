import { Component, input } from '@angular/core';
import { LivrosComponent } from "../livros/livros.component";
import { livros } from '../livros/mock-livros';
import { GeneroLiterario } from '../livros/livro';

@Component({
  selector: 'app-genero-literario',
  standalone: true,
  imports: [LivrosComponent],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();
}
