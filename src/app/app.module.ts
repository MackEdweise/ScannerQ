import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ScanPage } from '../pages/scan/scan';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { Login } from '../pages/login/login';

import {ResetPassword}from '../pages/reset-password/reset-password';
import {Signup} from '../pages/signup/signup';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthData } from '../providers/auth-data';

import { AngularFireModule } from '../../node_modules/angularfire2/angularfire2';

import { LineService } from '../providers/line-service'

// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyDE-WMV8Pz4ZtIwReSGsK7O6uC4RqOhurY",
  authDomain: "next-80843.firebaseapp.com",
  databaseURL: "https://next-80843.firebaseio.com",
  storageBucket: "next-80843.appspot.com",
  messagingSenderId: "244563636043"
};

@NgModule({
  declarations: [
    MyApp,
    ScanPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    ResetPassword,
    Signup
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScanPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    ResetPassword,
    Signup
  ],
  providers: [
    AuthData,
    StatusBar,
    SplashScreen,
    LineService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
