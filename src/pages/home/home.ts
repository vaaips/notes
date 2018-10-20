import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotePage } from '../note/note'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes;

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
    this.navCtrl.push(NotePage, { text: '' } )
  }

}
