import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { Date } from '../../models/date/date.model';

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

  date: Date = {
    from: undefined,
    to: undefined,
    now: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  getReport() {
    this.navCtrl.push
    (ReportPage, {od: this.date.from, do: this.date.to, teraz: this.date.now, czas: this.date.time });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalizujPage');
  }

}
