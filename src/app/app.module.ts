import { PasswordresetPageModule } from './../pages/passwordreset/passwordreset.module';
import { ProfilePageModule } from './../pages/profile/profile.module';
import { SignupPageModule } from './../pages/signup/signup.module';
import { GroupsPageModule } from './../pages/groups/groups.module';
import { ChatsPageModule } from './../pages/chats/chats.module';
import { LoginPageModule } from './../pages/login/login.module';
import { TabsPageModule } from './../pages/tabs/tabs.module';
import { PasswordresetPage } from './../pages/passwordreset/passwordreset';
import { TabsPage } from './../pages/tabs/tabs';
import { ProfilePage } from './../pages/profile/profile';
import { SignupPage } from './../pages/signup/signup';
import { GroupsPage } from './../pages/groups/groups';
import { ChatsPage } from './../pages/chats/chats';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { config } from './app.firebaseconfig';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';


import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
@NgModule({
  declarations: [
    MyApp,
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'} ),
    AngularFireModule.initializeApp(config),
    TabsPageModule,
    LoginPageModule,
    ChatsPageModule,
    GroupsPageModule,
    SignupPageModule,
    ProfilePageModule,
    PasswordresetPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FilePath,
    FileChooser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    UserProvider,
    ImghandlerProvider
  ]
})
export class AppModule {}
