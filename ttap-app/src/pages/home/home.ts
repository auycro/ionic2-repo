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

  openPage(page: Object) {
    console.log(page);
    if (page == 0){
      this.navCtrl.push(AlphabetPage, { data: "home" });
    }
    //this.navCtrl.push(DetailPage, { data: beer });
  }

}
