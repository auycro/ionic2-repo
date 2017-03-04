import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Alphabet } from '../models/alphabet.model';
/*
  Generated class for the Numbers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NumbersService {

  NUMBERS: string[] = [
    "0","1","2","3","4",
    "5","6","7","8","9",
    "10"
  ];

  numbers: Alphabet[];

  constructor(public http: Http) {
    //console.log('Hello Numbers Provider');
    this.numbers = [];

    for (let item of this.NUMBERS) {
      this.numbers.push(new Alphabet(
        item,
        "number",
        "assets/pronounce/numbers/"+item+".mp3"
      ));
    }
  }

  loadAlphabets(): Array<{name: string, type: string, pronounce: string}>{
    return this.numbers;
  }

  loadAlphabetsAsGrid(row_max: number): Array<Array<{name: string, alphabet: string, pronounce: string}>>{
    let array = this.numbers;
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
