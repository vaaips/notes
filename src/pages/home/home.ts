import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotePage } from '../note/note'
import { Storage } from '@ionic/storage';
import moment from 'moment';
import _ from 'lodash'
import uniqid from 'uniqid'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes;
  moment = moment

  constructor(public navCtrl: NavController, private storage: Storage) {
    storage.get('notes').then((value) => {
      this.notes = value
      console.log(this.notes);
      
    });
  }

  goToNote(id) {
    this.navCtrl.push(NotePage, { 'id': id })
  }

  newNote() {
    var last = _.findLast(this.notes)
    var id = uniqid()
    
    var note = {id: id, text: '', date: Number(moment().format('x'))}
    this.notes.unshift(note)

    this.storage.set('notes', this.notes)
    this.navCtrl.push(NotePage, { 'id': id })
  }

  deleteNote(id) {
    this.notes = _.reject(this.notes, {'id': id})
    this.storage.set('notes', this.notes)
  }
}
