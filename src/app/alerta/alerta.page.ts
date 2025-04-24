import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alertas',
  templateUrl: './alerta.page.html',
  styleUrls: ['./alerta.page.scss'],
  standalone: false,
})
export class AlertaPage implements OnInit {

  constructor(public alert: AlertController) { }

  async abrirAlert(){
    const alert=await this.alert.create({

      cssClass:'my-custon-class',
      header:'Olá!',
      subHeader:'Bem Vindo!',
      message:'Você clicou no botão e recebeu este alerta.',
      buttons: ['OK','Cancelar']
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
