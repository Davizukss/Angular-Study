import { ConexaoService } from './../../services/conexao.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  conexoes : number = 0
  constructor(private conexaoService: ConexaoService) {}

  ngOnInit(): void {
    this.contarConexoes();
  }

  contarConexoes(): void {
    this.conexaoService.ContarConexoes().subscribe({
      next: (data: number) => {
        this.conexoes = data;
      },
      error: (err) => {
        console.error('Erro ao contar conexões', err);
      }
    });
  }
}
