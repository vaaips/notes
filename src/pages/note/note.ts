import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import AutoSize from 'autosize';
import { Storage } from '@ionic/storage';
import _ from 'lodash'
import moment from 'moment'
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
    if(this.id == undefined) {
      this.storage.get('notes').then(value => {
        this.notes = value;
      })
    }
    else {
      this.storage.get('notes').then(value => {
        this.notes = value;
        this.note = _.find(this.notes, ['id', this.id])
        this.text = this.note.text
        this.index = _.findIndex(this.notes, {id: this.id})
      })
    }
  }

  update() {
    this.notes.splice(this.index, 1, {id: this.id, text: this.text, date: moment().format('dddd, MMMM Do YYYY, h:mm:ss')});
    // this.notes = []
    this.storage.set('notes', this.notes);
  }

  backToHome() {
    this.navCtrl.setRoot(HomePage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
    AutoSize(document.querySelector('textarea'));
  }
}
