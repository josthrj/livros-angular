import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'livros-angular';

  constructor(
    private controleEditoraService: ControleEditoraService,
    private controleLivrosService: ControleLivrosService
  ) { }
}