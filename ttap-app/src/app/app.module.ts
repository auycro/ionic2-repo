import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import { AlphabetPage } from '../pages/alphabet/alphabet';
import { Consonants } from '../providers/consonants.service';
import { Numbers } from '../providers/numbers.service';

@NgModule({
  declarations: [
    MyApp,
//    Page1,
//    Page2,
    HomePage,
    AlphabetPage,
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
    HomePage,
    AlphabetPage,
  ],
  providers: [
    Consonants,
    Numbers,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
