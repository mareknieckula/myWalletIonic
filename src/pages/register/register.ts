import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


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

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser() {
    if (this.password.value == this.password1.value) {
      this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
      .then(data =>{
        console.log('got data', data);
        let alert = this.alertCtrl.create({
          title: 'Info!',
          subTitle: 'Konto zostało utworzone! Możesz się teraz zalogować!',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(HomePage);
      } )
      .catch(error=> {
        let alert = this.alertCtrl.create({
          title: 'Błąd!',
          subTitle: error,
          buttons: ['OK']
        });
        alert.present();
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
