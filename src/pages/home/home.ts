import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotePage } from '../note/note'
import moment from 'moment';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes;

  constructor(public navCtrl: NavController) {
    this.notes = [
      { text: 'hi', date: '12th Sept 2018 10:02 PM' },
      { text: 'hello', date: '10th Sept 2018 10:12 PM' },
      { text: 'how are you', date: '09th Sept 2018 10:22 PM' }
    ]
  }

  goToNote(note) {
    this.navCtrl.push(NotePage, { text: note })
  }

  newNote() {
    this.navCtrl.push(NotePage, { text: '' } )
  }

}
