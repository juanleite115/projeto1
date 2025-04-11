import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
  standalone: false
})
export class ConfiguracoesPage {
  unidadeTemperatura: string = 'celsius';
  notificacoes: boolean = true;

  salvarConfiguracoes() {
    console.log('Configurações salvas:', {
      unidade: this.unidadeTemperatura,
      notificacoes: this.notificacoes
    });
  }
}
