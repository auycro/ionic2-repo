import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';

//import { Alphabet } from '../../models/alphabet';

import { Consonants } from '../../providers/consonants.service';
/*
  Generated class for the Alphabet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alphabet',
  templateUrl: 'alphabet.html'
})
export class AlphabetPage {

  rows: Array<Array<{name: any, alphabet: any, pronounce: any}>>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private consonants: Consonants
  ) {
    console.log(navCtrl,navParams);
    this.rows = this.consonants.loadConsonantsAsGrid(5);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AlphabetPage');
  }

  showPronounce(alphabet: any){
    //console.log(alphabet.pronounce);
    try {
      var media = new MediaPlugin(alphabet.pronounce);
      media.play();
    }
    catch (e) {
      console.log(e);
    }
  }
}
