import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

/*
<script src="https://www.gstatic.com/firebasejs/3.6.7/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAm28FF9xDJTjXJanKjjKVqjeoQ4mZRvWw",
    authDomain: "hellofirebase-1bca4.firebaseapp.com",
    databaseURL: "https://hellofirebase-1bca4.firebaseio.com",
    storageBucket: "hellofirebase-1bca4.appspot.com",
    messagingSenderId: "513755392545"
  };
  firebase.initializeApp(config);
</script>
*/

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAm28FF9xDJTjXJanKjjKVqjeoQ4mZRvWw",
  authDomain: "hellofirebase-1bca4.firebaseapp.com",
  databaseURL: "https://hellofirebase-1bca4.firebaseio.com",
  storageBucket: "hellofirebase-1bca4.appspot.com",
  messagingSenderId: "513755392545"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
