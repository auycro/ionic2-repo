import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { AudioProvider } from 'ionic-audio/dist';
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

  alphabets: Alphabet[];
  rows: Array<Array<{name: any, alphabet: any, pronounce: any}>>;
  data: Array<{row: any}>;
  //grid: Array<Array<string>>; //array of arrays

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //private _audioProvider: AudioProvider,
  ) {
    this.rows = [
      [
        {name:"ก", alphabet:"consonant", pronounce: "assets/pronounce/consonants/1.mp3"},
        {name:"ข", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ก", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ก", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ก", alphabet:"consonant", pronounce: "gor gai"}
      ],[
        {name:"ก", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ก", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ก", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ก", alphabet:"consonant", pronounce: "gor gai"},
        {name:"ก", alphabet:"consonant", pronounce: "gor gai"}
      ],
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
