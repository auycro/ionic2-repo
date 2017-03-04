import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.level =  this.navParams.get('page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlphabetTestPage');
  }

}
