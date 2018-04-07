import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Wydatek } from '../../models/wydatek/wydatek.model';

@Injectable()
export class ListaWydatkowService {

  private listaWydatkowRef = this.db.list<Wydatek>('lista-wydatkow');

  constructor(private db: AngularFireDatabase) {

  }

  getListaWydatkow() {
    return this.listaWydatkowRef;
  }

  addWydatek(wydatek: Wydatek) {
    return this.listaWydatkowRef.push(wydatek);
  }
}
