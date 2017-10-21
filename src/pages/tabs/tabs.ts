import { GroupsPage } from '../groups/groups';
import { ChatsPage } from '../chats/chats';
import { ProfilePage } from "../profile/profile";


import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: string = "ChatsPage";
  tab2: string = "GroupsPage";
  tab3: string = "ProfilePage";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
