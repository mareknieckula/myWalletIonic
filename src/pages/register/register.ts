import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild('password1') password1;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
    if (this.password.value == this.password1.value) {
      this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
      .then(data =>{
        console.log('got data', data);
        let toast = this.toastCtrl.create({
          message: 'Konto zostało utworzone!',
          duration: 2000,
          position: 'bottom'
        });

        toast.present();
        this.navCtrl.push(LoginPage);
      } )
      .catch(error=> {
        console.log('got error', error);
      })

    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Błąd!',
        subTitle: 'Wpisane hasła różnią się, spróbuj jeszcze raz!',
        buttons: ['OK']
      });
      alert.present();
    }
    this.user.value = "";
    this.password.value = "";
    this.password1.value = "";
  }

}
