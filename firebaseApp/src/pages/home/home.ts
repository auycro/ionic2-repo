import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  songs: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public af: AngularFire
  ) {
    //Relative URL
    //this.songs = af.database.list('/songs');
    //Absolute URL
    this.songs = af.database.list('https://hellofirebase-1bca4.firebaseio.com/songs');

    this.songs.forEach(song_item => {
      console.log('song_item:',song_item);
      song_item.forEach(function(item){
        console.log(`item:`,item.title,item.description);
      });
    });
  }

  addSong(){
    console.log('Add Song Clicked');
    let prompt = this.alertCtrl.create({
      title: 'Song Name',
      message: "Enter a name for this new song you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.songs.push({
              title: data.title
            });
          }
        }
      ]
    });
    prompt.present();
  }

  showOptions(song_key,song_title){
    console.log(song_key,song_title);
  }

  findSong(){
    let prompt = this.createSongTitlePopup('Find','Enter Title','Find',data=>{
      let result = this.af.database.list('/songs',{
        query: {
          orderByChild: 'title',
          equalTo: data.title
        }
      });
      result.subscribe(songs => {
        songs.forEach(function(item){
          console.log(`item:`,item.title,item.description);
        });
      });
    })
    prompt.present();
  }

  createSongTitlePopup(title,message,action_button_label,success_action){
    return this.alertCtrl.create({
      title: title,
      message: message,
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: action_button_label,
          handler: success_action
        }
      ]
    });
  }
}
