import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
import { WelcomePage } from '../pages/welcome/welcome';
import { AboutPage } from '../pages/about/about';

import { AlphabetHomePage } from '../pages/alphabet/alphabet-home/alphabet-home';
import { AlphabetMainPage } from '../pages/alphabet/alphabet-main/alphabet-main';
import { AlphabetTestPage } from '../pages/alphabet/alphabet-test/alphabet-test';

import { ConsonantsService } from '../providers/consonants-service';
import { NumbersService } from '../providers/numbers-service';
import { VowelsService } from '../providers/vowels-service';

@NgModule({
  declarations: [
    MyApp,
//    Page1,
//    Page2,
    WelcomePage,
    AboutPage,
    AlphabetHomePage,
    AlphabetMainPage,
    AlphabetTestPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '戻る',
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
//    Page1,
//    Page2,
    WelcomePage,
    AboutPage,
    AlphabetHomePage,
    AlphabetMainPage,
    AlphabetTestPage,
  ],
  providers: [
    ConsonantsService,
    NumbersService,
    VowelsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
