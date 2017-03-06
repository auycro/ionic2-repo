import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Slides} from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';

//import { AlphabetHomePage } from '../alphabet-home/alphabet-home';

import { ConsonantsService } from '../../../providers/consonants-service';
import { QuizzesService } from '../../../providers/quizzes-service';

import { Alphabet } from '../../../models/alphabet.model';
import { Quiz } from '../../../models/quiz.model';
/*
  Generated class for the AlphabetTest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alphabet-test',
  templateUrl: 'alphabet-test.html'
})
export class AlphabetTestPage {

  level: string;
  quizzes_list: Quiz[];
  answer: any;
  point: number;

  @ViewChild(Slides) slider: Slides;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private consonants: ConsonantsService,
    private quizzes: QuizzesService,
  ) {
    this.level =  this.navParams.get('page');
    this.point = 0;
    this.quizzes_list = this.quizzes.loadConsonantQuiz();
    console.log(this.quizzes_list);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AlphabetTestPage');
    this.slider.lockSwipes(true);
  }

  playSound(){
    console.log('slider:',this.slider.getActiveIndex());
  }

  onUpdatePoint(slider: Slides) {
    //this.showSkip = !slider.isEnd();
  }

  onAnswer(choice: Alphabet, answer: Alphabet){
    if (!this.slider.isEnd()){
      console.log('test:',choice,answer);
      this.slider.lockSwipes(false);
      this.slider.slideNext();
      this.slider.lockSwipes(true);
    }
  }

  onEndGame(){
    //this.navCtrl.popToRoot();
    this.navCtrl.pop();
  }
}
