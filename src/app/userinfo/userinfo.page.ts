import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.page.html',
  styleUrls: ['./userinfo.page.scss'],
})
export class UserinfoPage {

  email = '';
  telefone = '';

  constructor(public alertController: AlertController) {}

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Informe seus dados',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email',
        },
        {
          name: 'telefone',
          type: 'tel',
          placeholder: 'Telefone',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Enviar',
          handler: (data) => {
            this.email = data.email;
            this.telefone = data.telefone;
          },
        },
      ],
    });

    await alert.present();
  }

}
