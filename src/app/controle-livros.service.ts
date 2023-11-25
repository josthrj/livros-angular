import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  private livros: Livro[] = [];

  constructor() {
    let livro1: Livro = { codLivro: 101, codEditora: 1, titulo: 'Harry Potter e a Pedra Filosofal', resumo: 'Resumo do livro', autores: ['J.K. Rowling'] };
    let livro2: Livro = { codLivro: 102, codEditora: 1, titulo: 'Harry Potter e a Câmara Secreta', resumo: 'Resumo do livro', autores: ['J.K. Rowling'] };
    let livro3: Livro = { codLivro: 103, codEditora: 1, titulo: 'Harry Potter e o Prisioneiro de Azkaban', resumo: 'Resumo do livro', autores: ['J.K. Rowling'] };
    this.livros.push(livro1, livro2, livro3);
  }
  public getLivros(): Livro[] {
    return this.livros;
  }

  public adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  public excluirLivro(codigo: number): void {
    this.livros = this.livros.filter(livro => livro.codLivro !== codigo);
  }

  public alterarLivro(codigo: number, livro: Livro): void {
    for (let i = 0; i < this.livros.length; i++) {
      if (this.livros[i].codLivro === codigo) {
        this.livros[i] = livro;
        break;
      }
    }
  }
}