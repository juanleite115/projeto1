import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-previsao',
  templateUrl: './previsao.page.html',
  styleUrls: ['./previsao.page.scss'],
  providers: [DatePipe],
  standalone: false
})
export class PrevisaoPage {
  previsoes: any[] = [];
  cidade: string = 'São Paulo';
  dataSelecionada: string = new Date().toISOString();

  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  buscarPrevisao() {
    const apiKey = '8d9ff3b037be9d8a8a0e8bf5e423fe74';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.cidade}&appid=${apiKey}&units=metric&lang=pt_br`;
    
    this.http.get(url).subscribe((data: any) => {
      this.previsoes = data.list.map((item: any) => ({
        data: item.dt_txt,
        temp: item.main.temp,
        descricao: item.weather[0].description,
        icone: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`
      }));
    });
  }

  formatarData(data: string): string {
    return this.datePipe.transform(data, 'dd/MM/yyyy HH:mm') || '';
  }
  
  
}