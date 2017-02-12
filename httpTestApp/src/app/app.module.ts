import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
//import { ContactPage } from '../pages/contact/contact';
//import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';
import { GithubUsers } from '../providers/github-users';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
//    ContactPage,
//    HomePage,
//    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
//    ContactPage,
//    HomePage,
//    TabsPage
  ],
  providers: [
    GithubUsers,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
