import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { AlertController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.fire.auth.signInWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {
        console.log('got data', data);
        this.navCtrl.setRoot(MainPage);
        let toast = this.toastCtrl.create({
          message: 'Użytkownik zalogowany!',
          duration: 1500,
          position: 'bottom'
        });

        toast.present();
      }
      )
      .catch(error => {
        let alert = this.alertCtrl.create({
          title: 'Błąd!',
          subTitle: error,
          buttons: ['OK']
        });
        alert.present();
      })

  }

}
