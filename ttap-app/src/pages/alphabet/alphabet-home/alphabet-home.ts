import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlphabetMainPage } from '../alphabet-main/alphabet-main';
import { AlphabetTestPage } from '../alphabet-test/alphabet-test';

/*
  Generated class for the Alphabet Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-alphabet-home',
  templateUrl: 'alphabet-home.html'
})
export class AlphabetHomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openPage(data: Object) {
    //console.log(data);
    switch(data){
      case 0:
        this.navCtrl.push(AlphabetMainPage, { page: "consonants" });
        break;
      case 1:
        this.navCtrl.push(AlphabetMainPage, { page: "vowels" });
        break;
      case 2:
        this.navCtrl.push(AlphabetMainPage, { page: "numbers" });
        break;
      case 3:
        this.navCtrl.push(AlphabetTestPage, { page: "1" });
        break;
      default:
        console.log(data);
    }
  }

}
