import { Component } from '@angular/core';
import { PrevisaoPage } from '../previsao/previsao.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {teste: string = "50"
  dadosExemplo: any;
  
  carregarPrevisaoExemplo() {
    
    this.dadosExemplo = [
      {
        data: '10/05/2023 09:00',
        temp: 22,
        descricao: 'Parcialmente nublado',
        icone: 'https://openweathermap.org/img/wn/02d.png'
      },
      {
        data: '10/05/2023 12:00',
        temp: 26,
        descricao: 'Ensolarado',
        icone: 'https://openweathermap.org/img/wn/01d.png'
      },
      {
        data: '10/05/2023 15:00',
        temp: 24,
        descricao: 'Chuva leve',
        icone: 'https://openweathermap.org/img/wn/09d.png'
      }
    ];
  }
}
