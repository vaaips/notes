import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotePage } from '../note/note'
import { Storage } from '@ionic/storage';
import moment from 'moment';
import _ from 'lodash'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes;

  constructor(public navCtrl: NavController, private storage: Storage) {
    storage.get('notes').then((value) => {
      this.notes = value
    });
  }

  goToNote(id) {
    this.navCtrl.push(NotePage, { 'id': id })
  }

  newNote() {
    var last = _.findLast(this.notes)
    var id
    if(!last) {
      id = 1;
      this.notes = [{id: id, text: '', date: moment().format('dddd, MMMM Do YYYY, h:mm:ss')}]
    }
    else {
      id = last.id + 1
      var note = {id: id, text: '', date: moment().format('dddd, MMMM Do YYYY, h:mm:ss')}
      this.notes.push(note)
    }
    this.storage.set('notes', this.notes)
    this.navCtrl.push(NotePage, { 'id': id })
  }

  deleteNote(id) {
    this.notes = _.reject(this.notes, {'id': id})
    this.storage.set('notes', this.notes)
  }
}
