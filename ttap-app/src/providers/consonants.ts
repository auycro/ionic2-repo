import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

//import { Alphabet } from '../models/alphabet';
/*
  Generated class for the Consonants provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Consonants {

  consonants: any;

  constructor(public http: Http) {
    console.log('Hello Consonants Provider');
  }

  public loadConsonants(){
    this.consonants = [
      {name:"ก", alphabet:"consonant", pronounce: "assets/pronounce/consonants/ก.mp3"},
      {name:"ข", alphabet:"consonant", pronounce: "assets/pronounce/consonants/ข.mp3"},
      {name:"ฃ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ค", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฅ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฆ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ง", alphabet:"consonant", pronounce: "gor gai"},
      {name:"จ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฉ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ช", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ซ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฌ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ญ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฎ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฏ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฐ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฑ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฒ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ณ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ด", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ต", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ถ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ท", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ธ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"น", alphabet:"consonant", pronounce: "gor gai"},
      {name:"บ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ป", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ผ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฝ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"พ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฟ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ภ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ม", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ย", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ร", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ล", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ว", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ศ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ษ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ส", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ห", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฬ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"อ", alphabet:"consonant", pronounce: "gor gai"},
      {name:"ฮ", alphabet:"consonant", pronounce: "gor gai"}
    ];
    //return this.consonants;
  }
}
