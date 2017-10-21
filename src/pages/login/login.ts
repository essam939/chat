import { PasswordresetPage } from './../passwordreset/passwordreset';
import { TabsPage } from './../tabs/tabs';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { usercreds } from '../../models/interfaces/usercreds';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authservice:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signin(){
this.authservice.login(this.credentials).then((res:any)=>{
  if (!res.code)
  this.navCtrl.setRoot(TabsPage);
else
  alert(res);
})
  }
  signup() {
    this.navCtrl.push('SignupPage');
  }
  passwordreset(){
    this.navCtrl.push('PasswordresetPage');
  }
}
