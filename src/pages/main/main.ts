import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  email: string;

  constructor(private fire:AngularFireAuth ,public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    this.email = fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  logout() {
    let alert = this.alertCtrl.create({
      message: 'Czy napewno chcesz się wylogować?',
      buttons: [
        {
          text: 'Anuluj',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Wyloguj',
          handler: () => {
            this.fire.auth.signOut;
            let toast = this.toastCtrl.create({
              message: 'Wylogowano!',
              duration: 1500,
              position: 'bottom'
            });

            toast.present();
            this.navCtrl.setRoot(HomePage);

          }
        }
      ]
    });
    alert.present();
  }

}
