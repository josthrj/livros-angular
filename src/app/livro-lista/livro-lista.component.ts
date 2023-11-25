import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
 selector: 'app-livro-lista',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './livro-lista.component.html',
 styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent implements OnInit {
 public editoras: Array<Editora> = [];
 public livros: Array<Livro> = [];

 private servEditora: ControleEditoraService;
 private servLivros: ControleLivrosService;

 constructor(private editoraService: ControleEditoraService, private livroService: ControleLivrosService) {
    this.servEditora = editoraService;
    this.servLivros = livroService;
 }

 ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
 }

 excluir = (codLivro: number): void => {
    this.servLivros.excluir(codLivro);
    this.livros = this.servLivros.obterLivros();
 }

 obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
 }
}