import { livros } from './mock-livros';
export interface Livro{
    titulo : string;
    autoria : string;
    favorito : boolean;
    imagem : string;
    genero : GeneroLiterario;
}

export interface GeneroLiterario {
    id: string;
    value: string;
    livros: Livro[];
}