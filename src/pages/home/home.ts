import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  login() {
    this.navCtrl.push(LoginPage);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

  showInfo() {
    let alert = this.alertCtrl.create({
      title: 'myWallet',
      subTitle: 'Aplikacja mobilna myWallet do kontrolowania finansów osobistych. Użyte technologie: Ionic, Apache Cordova. Autor: Marek Nieckula WSEI Kraków.',
      buttons: ['OK']
    });
    alert.present();
  }

}
