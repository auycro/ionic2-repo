import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Alphabet } from '../models/alphabet.model';
/*
  Generated class for the VowelsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class VowelsService {

  VOWELS: string[] = [
    "-ะ","-า","ิ","ึ"
  ];

  vowels: Alphabet[];

  constructor(public http: Http) {
    //console.log('Hello VowelsService Provider');

    this.vowels = [];

    for (let item of this.VOWELS) {
      this.vowels.push(new Alphabet(
        item,
        "vowel",
        "assets/pronounce/vowels/"+item+".mp3"
      ));
    }
  }

  loadAlphabets(): Array<{name: string, type: string, pronounce: string}>{
    return this.vowels;
  }

  loadAlphabetsAsGrid(row_max: number): Array<Array<{name: string, alphabet: string, pronounce: string}>>{
    let array = this.vowels;
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
