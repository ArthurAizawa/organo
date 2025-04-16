import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { LivrosComponent } from './componentes/livros/livros.component';
import { ListaLivrosComponent } from './componentes/lista-livros/lista-livros.component';
import { GeneroLiterarioComponent } from "./componentes/genero-literario/genero-literario.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    LivrosComponent,
    ListaLivrosComponent,
    GeneroLiterarioComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'organo';
}
