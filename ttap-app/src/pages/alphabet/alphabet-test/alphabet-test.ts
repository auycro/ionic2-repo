import { Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Slides} from 'ionic-angular';
import { MediaPlugin } from 'ionic-native';

import { ConsonantsService } from '../../../providers/consonants-service';

import { QuizzesService } from '../../../providers/quizzes-service';
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
  quiz: any;
  answer: any;
  point: number;

  @ViewChild(Slides) slider: Slides;
  slideOptions: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private consonants: ConsonantsService,
    private quizzes: QuizzesService,
  ) {
    this.level =  this.navParams.get('page');
    this.point = 0;

    //LockSwipes
    this.slideOptions = {
      onlyExternal: false,
       onInit: (slides: any) =>
          this.slider = slides
     }

    var quizzes_list = this.quizzes.loadConsonantQuiz();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AlphabetTestPage');
    this.slider.lockSwipes(true);
  }

  onUpdatePoint(slider: Slides) {
    //this.showSkip = !slider.isEnd();
  }

  onEndGame(){
    this.navCtrl.popToRoot();
  }
}
