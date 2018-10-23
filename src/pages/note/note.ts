import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import AutoSize from 'autosize';
import { Storage } from '@ionic/storage';
import _ from 'lodash'
import { HomePage } from '../home/home';

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
  index;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.id = navParams.get("id");
    if(this.id) {
      this.storage.get('notes').then(value => {
        this.notes = value;
        this.note = _.find(this.notes, ['id', this.id])
        this.text = this.note.text
        this.index = _.findIndex(this.notes, {id: this.id})
      })
    }
  }

  update() {
    this.notes.splice(this.index, 1, {id: this.id, text: this.text, date: this.note.date});
    this.storage.set('notes', this.notes);
  }

  backToHome() {

    // Delete note if it has no content and back to home page
    if(!this.text) {
      this.notes.splice(this.index, 1)
      this.storage.set('notes', this.notes);
    }
    this.navCtrl.push(HomePage)
  }

  ionViewDidLoad() {
    AutoSize(document.querySelector('textarea'));
  }
}
