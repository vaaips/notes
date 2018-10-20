import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import AutoSize from 'autosize';
import { Storage } from '@ionic/storage';
import _ from 'lodash'

/**
 * Generated class for the NotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-note',
  templateUrl: 'note.html',
})
export class NotePage {
  id;
  notes: any[] = [];
  text;
  note;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.id = navParams.get("id");
    this.storage.get('notes').then(value => {
      this.notes = value;
      this.note = _.find(this.notes, ['id', this.id])
      this.text = this.note.text
    })
  }

  update() {
    this.storage.set('notes', this.notes);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
    AutoSize(document.querySelector('textarea'));
  }
}
