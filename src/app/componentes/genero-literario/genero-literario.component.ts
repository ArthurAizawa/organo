import { Component, input } from '@angular/core';
import { LivrosComponent } from "../livros/livros.component";
import { GeneroLiterario } from '../livros/livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  standalone: true,
  imports: [
    LivrosComponent,
    CommonModule
  ],
  templateUrl: './genero-literario.component.html',
  styleUrl: './genero-literario.component.css'
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();
}
