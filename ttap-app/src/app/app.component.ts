import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
import { WelcomePage } from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';
import { AlphabetHomePage } from '../pages/alphabet/alphabet-home/alphabet-home';
//import { AlphabetPage } from '../pages/alphabet/alphabet';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage: any = Page1;
  rootPage: any = AlphabetHomePage;

  pages: Array<{title: string, icon:string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
//      { title: 'Page One', component: Page1 },
//      { title: 'Page Two', component: Page2 },
      { title: 'タイ文字', icon: 'home', component: AlphabetHomePage },
      { title: 'ようこそ', icon: 'home', component: WelcomePage },
      { title: 'アプリについて', icon: 'home', component: AboutPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
