import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsers } from '../../providers/github-users';
import { UserDetailsPage } from '../user-details/user-details';
/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users: User[];
  originalUsers: User[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers: GithubUsers) {
    githubUsers.load().subscribe(users => {
      //users.forEach(user=>{
      //  console.log(user.login);
      //});
      this.users = users;
      this.originalUsers = users;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goToDetails(login: string) {
     this.navCtrl.push(UserDetailsPage, {login});
  }

  search(searchEvent){
    let search_val = searchEvent.target.value;
    //console.log(search_val);
    // We will only perform the search if we have 3 or more characters
    if (search_val.trim() === '' || search_val.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      // Get the searched users from github
      this.githubUsers.searchUsers(search_val).subscribe(users => {
        this.users = users
      });
    }
  }

}
