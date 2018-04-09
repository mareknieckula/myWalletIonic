import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ReportPage } from '../report/report';

/**
 * Generated class for the AnalizujPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analizuj',
  templateUrl: 'analizuj.html',
})
export class AnalizujPage {

  totalJedzenie = 0;
  totalRozrywka = 0;
  totalTransport = 0;
  totalEdukacja = 0;
  totalMieszkanie = 0;
  totalInne = 0;

  constructor(private sqlite: SQLite, public navCtrl: NavController, public navParams: NavParams) {
  }


  getReport() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT SUM (price) AS totalJedzenie FROM wydatki WHERE category="jedzenie"', {})
        .then(res => {
          this.totalJedzenie = parseFloat(res.rows.item(0).totalJedzenie);
          alert('zrobione!');
        })
        .catch(e => console.log(e));
      db.executeSql('SELECT SUM (price) AS totalRozrywka FROM wydatki WHERE category="rozrywka"', {})
        .then(res => {
          this.totalJedzenie = parseFloat(res.rows.item(0).totalRozrywka);
          alert('zrobione!');
        })
        .catch(e => console.log(e));
      db.executeSql('SELECT SUM (price) AS totalTransport FROM wydatki WHERE category="transport"', {})
        .then(res => {
          this.totalJedzenie = parseFloat(res.rows.item(0).totalTransport);
          alert('zrobione!');
        })
        .catch(e => console.log(e));
      db.executeSql('SELECT SUM (price) AS totalEdukacja FROM wydatki WHERE category="edukacja"', {})
        .then(res => {
          this.totalJedzenie = parseFloat(res.rows.item(0).totalEdukacja);
          alert('zrobione!');
        })
        .catch(e => console.log(e));
      db.executeSql('SELECT SUM (price) AS totalMieszkanie FROM wydatki WHERE category="mieszkanie"', {})
        .then(res => {
          this.totalJedzenie = parseFloat(res.rows.item(0).totalMieszkanie);
          alert('zrobione!');
        })
        .catch(e => console.log(e));
      db.executeSql('SELECT SUM (price) AS totalInne FROM wydatki WHERE category="inne"', {})
        .then(res => {
          this.totalJedzenie = parseFloat(res.rows.item(0).totalInne);
          alert('zrobione!');
        })
        .catch(e => console.log(e));
    });
    this.navCtrl.push(ReportPage, {rozrywka: this.totalRozrywka, jedzenie: this.totalJedzenie, transport: this.totalTransport, mieszkanie: this.totalMieszkanie, edukacja: this.totalEdukacja, inne: this.totalInne  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalizujPage');
  }

}
