import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MediaPlugin, File } from 'ionic-native';

import { Alphabet } from '../../models/alphabet';

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
  data: Array<{row: any}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.rows = [
      [
        {name:"ก", alphabet:"consonant", pronounce: "assets/pronounce/consonants/ก.mp3"},
        {name:"ข", alphabet:"consonant", pronounce: "assets/pronounce/consonants/ข.mp3"},
        {name:"ฃ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ค", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ฅ", alphabet:"consonant", pronounce: "gor gai"}
      ],[
        {name:"ฆ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ง", alphabet:"consonant", pronounce: "gor gai"},
        {name:"จ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ฉ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ช", alphabet:"consonant", pronounce: "gor gai"}
      ],[
        {name:"ซ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ฌ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ญ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ฎ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ฏ", alphabet:"consonant", pronounce: "gor gai"}
      ],[
        {name:"ฐ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ฑ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ฒ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ณ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ด", alphabet:"consonant", pronounce: "gor gai"}
      ],[
        {name:"ต", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ถ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ท", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ธ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"น", alphabet:"consonant", pronounce: "gor gai"}
      ],[
        {name:"บ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ป", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ผ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ฝ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"พ", alphabet:"consonant", pronounce: "gor gai"}
      ],[
        {name:"ฟ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ภ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ม", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ย", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ร", alphabet:"consonant", pronounce: "gor gai"}
      ],[
        {name:"ล", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ว", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ศ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ษ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ส", alphabet:"consonant", pronounce: "gor gai"}
      ],[
        {name:"ห", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ฬ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"อ", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ฮ", alphabet:"consonant", pronounce: "gor gai"},
      ]
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlphabetPage');
    console.log(this.data);
  }

  showPronounce(alphabet: any){
    console.log(alphabet.pronounce);
    //let media = new MediaPlugin(alphabet.pronounce);
    try {
      //File.checkDir(alphabet.pronounce, '').then(_ => console.log('yay')).catch(err => console.log('boooh'));
      //let path =
      let media = new MediaPlugin(alphabet.pronounce);
      media.play();
      //media.startRecord();
    }
    catch (e) {
      console.log(e);
    }
  }
}
