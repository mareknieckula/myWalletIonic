import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Wydatek } from '../../models/wydatek/wydatek.model';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { MainPage } from '../main/main';
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
    created: new Date().toISOString().slice(0,10)
  }





  constructor(private sqlite: SQLite, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DodajWydatekPage');
  }

  addWydatek() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql
      ('CREATE TABLE IF NOT EXISTS wydatki (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, created TEXT, category TEXT, price REAL)', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));
      db.executeSql
      ('INSERT INTO wydatki VALUES(NULL,?,?,?,?)', [this.wydatek.email, this.wydatek.created, this.wydatek.category, this.wydatek.price])
        .then(res => {
          console.log(res);
          alert('Zapisano!');
          this.navCtrl.push(MainPage);
        })
        .catch(e => console.log(e))

        });

    }

}
