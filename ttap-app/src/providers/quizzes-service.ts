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
  check_quiz : { [index:string]: string; } = {};

  constructor(
    public http: Http,
    private consonants: ConsonantsService
  ) {
    //this.quiz = [];
  }

  loadConsonantQuiz(): Array<{question: Alphabet, choices: Alphabet[], right_choice: Alphabet}>{
    this.quiz = [];
    var alphabets = this.consonants.loadAlphabets();

    for(var i=0;i<10;i++){
      var index = Math.floor(Math.random() * (alphabets.length-1)) + 0;

      if (this.check_quiz[alphabets[index].name] == null){
        var q = { question: alphabets[index],
                  choices: this.randomChoice(alphabets, alphabets[index]),
                  right_choice: alphabets[index] };
        this.quiz.push(q);
      }
    }
    //console.log(this.quiz);
    return this.quiz;
  }

  randomChoice(list:Alphabet[], answer:Alphabet): Alphabet[]{
    var choices = [];

    choices.push(answer);

    while (choices.length < 4){
      var index = Math.floor(Math.random() * (list.length-1)) + 0;
      if (list[index].name != answer.name){
        choices.push(list[index]);
      }
    }

    return this.shuffle(choices);
  }

  shuffle(array:Alphabet[]): Alphabet[] {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

}
