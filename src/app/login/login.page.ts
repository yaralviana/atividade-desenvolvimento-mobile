import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
 
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username?: string;
  password?: string;
 
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
 
  }
 
  login() {
    //simulando um usuário e senha
    if (this.username === 'usertest' && this.password === '123456') {
      this.navCtrl.navigateForward('/welcome');
      this.showWelcomeAlert();
    } else {
      this.showInvalidCredentialsAlert();
    }
  }
 
  async showWelcomeAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Bem-vindo',
      message: `Olá ${this.username}!`,
      buttons: ['OK']
    });
 
    await alert.present();
  }
 
  async showInvalidCredentialsAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Erro',
      message: 'Usuário ou senha inválidos.',
      buttons: ['OK']
    });
 
    await alert.present();
  }
}
