import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ToastController } from 'ionic-angular';
import { MainPage } from '../main/main';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  totalJedzenie = 0;
  totalRozrywka = 0;
  totalTransport = 0;
  totalEdukacja = 0;
  totalMieszkanie = 0;
  totalInne = 0;

  from: string;
  to: string;
  now: string;
  time: string;



  constructor(private toastCtrl: ToastController, private sqlite: SQLite, public navCtrl: NavController, public navParams: NavParams) {
    this.from = navParams.get('od');
    this.to = navParams.get('do');
    this.now = navParams.get('teraz');
    this.time = navParams.get('czas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  ionViewDidEnter() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT SUM (price) AS totalJedzenie FROM wydatki WHERE category="jedzenie"', {})
        .then(res => {
          this.totalJedzenie = parseFloat(res.rows.item(0).totalJedzenie);
        })
        .catch(e => console.log(e));
      db.executeSql('SELECT SUM (price) AS totalRozrywka FROM wydatki WHERE category="rozrywka"', {})
        .then(res => {
          this.totalRozrywka = parseFloat(res.rows.item(0).totalRozrywka);
        })
        .catch(e => console.log(e));
      db.executeSql('SELECT SUM (price) AS totalTransport FROM wydatki WHERE category="transport"', {})
        .then(res => {
          this.totalTransport = parseFloat(res.rows.item(0).totalTransport);
        })
        .catch(e => console.log(e));
      db.executeSql('SELECT SUM (price) AS totalEdukacja FROM wydatki WHERE category="edukacja"', {})
        .then(res => {
          this.totalEdukacja = parseFloat(res.rows.item(0).totalEdukacja);
        })
        .catch(e => console.log(e));
      db.executeSql('SELECT SUM (price) AS totalMieszkanie FROM wydatki WHERE category="mieszkanie"', {})
        .then(res => {
          this.totalMieszkanie = parseFloat(res.rows.item(0).totalMieszkanie);
        })
        .catch(e => console.log(e));
      db.executeSql('SELECT SUM (price) AS totalInne FROM wydatki WHERE category="inne"', {})
        .then(res => {
          this.totalInne = parseFloat(res.rows.item(0).totalInne);
        })
        .catch(e => console.log(e));
    });
    let toast = this.toastCtrl.create({
      message: 'Raport został wygenerowany!',
      duration: 1500,
      position: 'bottom'
    });

    toast.present();
  }

  closeReport() {
    this.navCtrl.push(MainPage);
  }

}
