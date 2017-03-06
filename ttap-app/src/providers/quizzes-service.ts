import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Alphabet } from '../models/alphabet.model';
import { Quiz } from '../models/quiz.model';

import { ConsonantsService } from '../providers/consonants-service';
/*
  Generated class for the QuizzedService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuizzesService {

  quiz: Quiz[];
  level: number;

  constructor(
    public http: Http,
    private consonants: ConsonantsService
  ) {
    this.quiz = [];
  }

  loadConsonantQuiz(): Array<{question: Alphabet, choices: Alphabet[], right_choice: Alphabet}>{

    var alphabets = this.consonants.loadAlphabets();

    for(var i=0;i<10;i++){
      var index = Math.floor(Math.random() * (alphabets.length-1)) + 0;
      var q = { question: alphabets[index],
                choices: this.randomChoice(alphabets),
                right_choice: alphabets[index] };
      this.quiz.push(q);
    }
    //console.log(this.quiz);
    return this.quiz;
  }

  randomChoice(list:Alphabet[]): Alphabet[]{
    var choices = [];
    for(var i=0;i<3;i++){
      var index = Math.floor(Math.random() * (list.length-1)) + 0;
      choices.push(list[index]);
    }
    return choices;
  }

}
