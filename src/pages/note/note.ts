import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import AutoSize from 'autosize';

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
  note;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.note = navParams.get("text");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotePage');
    AutoSize(document.querySelector('textarea'));
  }
}
