import { Component } from '@angular/core';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.page.html',
  styleUrls: ['./cidades.page.scss'],
  standalone: false
})
export class CidadesPage {
  cidades = [
    { nome: 'São Paulo', pais: 'BR' },
    { nome: 'Rio de Janeiro', pais: 'BR' },
    { nome: 'Lisboa', pais: 'PT' },
    { nome: 'Nova York', pais: 'US' }
  ];

  cidadeSelecionada: string = '';

  selecionarCidade(cidade: string) {
    this.cidadeSelecionada = cidade;
  }
}