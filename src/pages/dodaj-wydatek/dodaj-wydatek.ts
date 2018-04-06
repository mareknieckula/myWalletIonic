import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Wydatek } from '../../models/wydatek/wydatek.model';

/**
 * Generated class for the DodajWydatekPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dodaj-wydatek',
  templateUrl: 'dodaj-wydatek.html',
})
export class DodajWydatekPage {
  wydatek: Wydatek = {
    price: 0,
    category: '',
    email: this.fire.auth.currentUser.email,
  }

  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DodajWydatekPage');
  }

}
