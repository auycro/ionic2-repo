import { Alphabet } from '../models/alphabet.model';

export class Quiz {
  question: Alphabet;
  choices: Alphabet[];
  right_choice: Alphabet;

  constructor(question:Alphabet, choices:Alphabet[], right_choice:Alphabet){
    this.question = question;
    this.choices = choices;
    this.right_choice = right_choice;
  }
}
