import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';

//import { Alphabet } from '../../models/alphabet';

import { ConsonantsService } from '../../../providers/consonants-service';
import { NumbersService } from '../../../providers/numbers-service';
import { VowelsService } from '../../../providers/vowels-service';
/*
  Generated class for the Alphabet page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alphabet-main',
  templateUrl: 'alphabet-main.html'
})
export class AlphabetMainPage {

  header: string;
  page_type: string;
  rows: Array<Array<{name: any, alphabet: any, pronounce: any}>>;
  sounds: { [index: string]: any; } = {};
  previous_clicked_character: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private consonants: ConsonantsService,
    private numbers: NumbersService,
    private vowels: VowelsService
  ) {
    //console.log(this.navParams.get('page'));
    this.page_type =  this.navParams.get('page');
    var item_list = [];
    switch(this.page_type){
      case 'consonants':
        this.header = '子音';
        this.rows = this.consonants.loadAlphabetsAsGrid(4);
        item_list = this.consonants.loadAlphabets();
        break;
    　case 'vowels':
        this.header = '母字';
        this.rows = this.vowels.loadAlphabetsAsGrid(4);
        item_list = this.vowels.loadAlphabets();
        break;
      case 'numbers':
        this.header = '数字';
        this.rows = this.numbers.loadAlphabetsAsGrid(4);
        item_list = this.numbers.loadAlphabets();
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
    try {
      this.sounds[this.previous_clicked_character].stop();
      this.sounds[alphabet.name].play();
      this.previous_clicked_character = alphabet.name;
    }
    catch (e) {
      console.log(e);
    }
  }
}
