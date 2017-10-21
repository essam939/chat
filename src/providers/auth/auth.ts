import { usercreds } from './../../models/interfaces/usercreds';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthProvider {

  constructor(public afireauth:AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
login(credentials:usercreds){
  var promise = new Promise((resolve, reject)=>{
    this.afireauth.auth.signInWithEmailAndPassword(credentials.email,credentials.password).then(()=>{
resolve(true);
    
  }).catch((err)=>{
    reject(err);
  })
  })
  return promise;
}
}
