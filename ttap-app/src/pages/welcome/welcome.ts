import { Component } from '@angular/core';
import { NavController, NavParams, Slides} from 'ionic-angular';
//import { Storage } from '@ionic/storage';

import { AlphabetHomePage } from '../alphabet/alphabet-home/alphabet-home';

/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  onSlideChangeStart(slider: Slides) {
    //this.showSkip = !slider.isEnd();
  }

  startApp(){
    this.navCtrl.push(AlphabetHomePage);
    //this.navCtrl.popToRoot();
/*
    this.navCtrl.push(TabsPage).then(() => {
      this.storage.set('hasSeenTutorial', 'true');
    })
*/
  }
}
