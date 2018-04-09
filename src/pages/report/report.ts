import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  totalJedzenie = undefined;
  totalRozrywka = undefined;
  totalTransport = undefined;
  totalEdukacja = undefined;
  totalMieszkanie = undefined;
  totalInne = undefined;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.totalJedzenie = navParams.get('jedzenie');
    this.totalRozrywka = navParams.get('rozrywka');
    this.totalTransport = navParams.get('transport');
    this.totalEdukacja = navParams.get('edukajca');
    this.totalMieszkanie = navParams.get('mieszkanie');
    this.totalInne = navParams.get('inne');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

  ionViewDidEnter() {

  }

  closeReport() {
    this.navCtrl.pop();
  }

}
