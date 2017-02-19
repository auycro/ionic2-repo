import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicAudioModule } from 'ionic-audio/dist';
import { MyApp } from './app.component';
//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
import { AlphabetPage } from '../pages/alphabet/alphabet';

@NgModule({
  declarations: [
    MyApp,
//    Page1,
//    Page2,
    AlphabetPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
//    Page1,
//    Page2,
    AlphabetPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
