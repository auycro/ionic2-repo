import { Component, ViewChild} from '@angular/core';
import {
  NavController,
  NavParams,
  Slides,
  AlertController
} from 'ionic-angular';

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
  sounds: { [index: string]: any; } = {};
  previous_clicked_character: string;

  @ViewChild(Slides) slider: Slides;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private consonants: ConsonantsService,
    private quizzes: QuizzesService,
    private alertCtrl: AlertController
  ) {
    this.level =  this.navParams.get('page');
    this.point = 0;
    this.quizzes_list = this.quizzes.loadConsonantQuiz();
    //console.log(this.quizzes_list);

    for (let quiz of this.quizzes_list) {
      this.sounds[quiz.question.name] = new MediaPlugin(quiz.question.pronounce);
      this.previous_clicked_character = quiz.question.name;
    }
  }

  ionViewDidLoad() {
    this.slider.lockSwipes(true);
  }

  playSound(alphabet: Alphabet){
    //console.log('slider:',this.slider.getActiveIndex());
    try {
      this.sounds[this.previous_clicked_character].stop();
      this.sounds[alphabet.name].play();
      this.previous_clicked_character = alphabet.name;
    }
    catch (e) {
      console.log(e);
    }
  }

  onUpdatePoint(slider: Slides) {
    //this.showSkip = !slider.isEnd();
  }

  onAnswer(choice: Alphabet, answer: Alphabet){
    this.checkAnswer(choice,answer);

    if (!this.slider.isEnd()){
      console.log('test:',choice,answer);
      this.slider.lockSwipes(false);
      this.slider.slideNext();
      this.slider.lockSwipes(true);
    } else {
      this.pointConfirm(this.point);
    }
  }

  onEndGame(){
    //this.navCtrl.popToRoot();
    this.navCtrl.pop();
  }

  checkAnswer(select: Alphabet, answer: Alphabet){
    if (select.name == answer.name){
      this.point++;
    }
    console.log(this.point);
  }

  pointConfirm(point: number){
    let alert = this.alertCtrl.create({
      title: 'ゲームオーバー',　//'テスト終了',
      message: 'ポイント：'+point.toString(),
      buttons: [
        {
          text: '終了',
          //role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
            this.onEndGame();
          }
        }
      ]
    });
    alert.present();
  }
}
