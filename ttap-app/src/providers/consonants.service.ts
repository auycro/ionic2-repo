import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Alphabet } from '../models/alphabet.model';
/*
  Generated class for the Consonants provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Consonants {

  CONSONANTS: string[] = [
    "ก","ข","ฃ","ค","ฅ",
    "ฆ","ง","จ","ฉ","ช",
    "ซ","ฌ","ญ","ฎ","ฏ",
    "ฐ","ฑ","ฒ","ณ","ด",
    "ต","ถ","ท","ธ","น",
    "บ","ป","ผ","ฝ","พ",
    "ฟ","ภ","ม","ย","ร",
    "ล","ว","ศ","ษ","ส",
    "ห","ฬ","อ","ฮ"
  ];

  consonants: Alphabet[];

  constructor(public http: Http) {
    //console.log('Hello Consonants Provider');
    this.consonants = [];

    for (let item of this.CONSONANTS) {
      this.consonants.push(new Alphabet(
        item,
        "consonant",
        "assets/pronounce/consonants/"+item+".mp3"
      ));
    }
  }

  loadConsonants(): Array<{name: string, type: string, pronounce: string}>{
    this.consonants = [];

    for (let item of this.CONSONANTS) {
      this.consonants.push(new Alphabet(
        item,
        "consonant",
        "assets/pronounce/consonants/"+item+".mp3"
      ));
    }

    return this.consonants;
  }

  loadConsonantsAsGrid(row_max: number): Array<Array<{name: string, alphabet: string, pronounce: string}>>{
    let array = this.consonants;
    let data = [];
    let row = [];

    for (let entry of array) {
      if (row.length >= row_max){
        data.push(row);
        row = [];
      }
      row.push(entry);
    }

    if (row.length > 0){
      data.push(row);
    }

    return data;
  }
}
