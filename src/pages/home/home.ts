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
  introNotes = [
    {id: 1, text: 'Welcome to Notes. Keep your notes here simply!!!', date: Number(moment().format('x'))},
    {id: 2, text: 'Tap on + icon to create new note.', date: Number(moment().format('x'))},
    {id: 3, text: 'Slid to left and tap on trash icon to delete a note.', date: Number(moment().format('x'))}
  ];

  constructor(public navCtrl: NavController, private storage: Storage) {
    storage.get('notes').then((value) => {
      this.notes = value
      if(!this.notes) {
        this.notes = this.introNotes
        storage.set('notes', this.notes)
      }
    });
  }

  goToNote(id) {
    this.navCtrl.push(NotePage, { 'id': id })
  }

  newNote() {

    // Create new note
    var id = uniqid()
    var note = {id: id, text: '', date: Number(moment().format('x'))}
    this.notes.unshift(note)
    this.storage.set('notes', this.notes)

    // Remove the content
    this.notes = []

    this.navCtrl.push(NotePage, { 'id': id })
  }

  deleteNote(id) {
    this.notes = _.reject(this.notes, {'id': id})
    this.storage.set('notes', this.notes)
  }
}
