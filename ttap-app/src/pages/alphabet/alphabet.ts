import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';

//import { Alphabet } from '../../models/alphabet';

import { Consonants } from '../../providers/consonants.service';
import { Numbers } from '../../providers/numbers.service';
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

  header: string;
  rows: Array<Array<{name: any, alphabet: any, pronounce: any}>>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private consonants: Consonants,
    private numbers: Numbers,
  ) {
    console.log(this.navParams.get('page'));
    var page_type =  this.navParams.get('page');
    switch(page_type){
      case 'consonants':
        this.header = '子音';
        this.rows = this.consonants.loadConsonantsAsGrid(5);
        break;
      case 'numbers':
        this.header = '数字';
        this.rows = this.numbers.loadNumbersAsGrid(5);
        break;
    }
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
