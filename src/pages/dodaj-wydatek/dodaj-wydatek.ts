import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Wydatek } from '../../models/wydatek/wydatek.model';
import { ListaWydatkowService } from '../../services/lista-wydatkow/lista-wydatkow.service';

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
    price: undefined,
    category: undefined,
    email: this.fire.auth.currentUser.email,
    created: new Date().toLocaleDateString(),
  }

  constructor(private wydatki: ListaWydatkowService, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DodajWydatekPage');
  }

  addWydatek(wydatek: Wydatek) {
    this.wydatki.addWydatek(wydatek).then(ref=>{
      console.log(ref.key);})
  }

}
