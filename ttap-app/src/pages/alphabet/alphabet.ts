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
  sounds: { [index: string]: any; } = {};
  previous_clicked_character: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private consonants: Consonants,
    private numbers: Numbers,
  ) {
    console.log(this.navParams.get('page'));
    var page_type =  this.navParams.get('page');
    var item_list = [];
    switch(page_type){
      case 'consonants':
        this.header = '子音';
        this.rows = this.consonants.loadConsonantsAsGrid(4);
        item_list = this.consonants.loadConsonants();
        break;
      case 'numbers':
        this.header = '数字';
        this.rows = this.numbers.loadNumbersAsGrid(4);
        item_list = this.numbers.loadNumbers();
        break;
    }

    for (let item of item_list) {
      this.sounds[item.name] = new MediaPlugin(item.pronounce);
      this.previous_clicked_character = item.name;
    }
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AlphabetPage');
  }

  showPronounce(alphabet: any){
    this.sounds[this.previous_clicked_character].stop();
    try {
      this.sounds[alphabet.name].play();
      this.previous_clicked_character = alphabet.name;
    }
    catch (e) {
      console.log(e);
    }
  }
}
