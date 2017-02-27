import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlphabetPage } from '../../pages/alphabet/alphabet';
/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openPage(data: Object) {
    console.log(data);
    switch(data){
      case 0:
        this.navCtrl.push(AlphabetPage, { page: "consonants" });
        break;
      case 1:
        this.navCtrl.push(AlphabetPage, { page: "numbers" });
        break;
      default:
        console.log(data);
    }
  }

}
