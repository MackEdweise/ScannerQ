"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ionic_angular_1 = require('ionic-angular');
var app_component_1 = require('./app.component');
var scan_1 = require('../pages/scan/scan');
var contact_1 = require('../pages/contact/contact');
var home_1 = require('../pages/home/home');
var tabs_1 = require('../pages/tabs/tabs');
var login_1 = require('../pages/login/login');
var reset_password_1 = require('../pages/reset-password/reset-password');
var signup_1 = require('../pages/signup/signup');
var status_bar_1 = require('@ionic-native/status-bar');
var splash_screen_1 = require('@ionic-native/splash-screen');
var auth_data_1 = require('../providers/auth-data');
var angularfire2_1 = require('../../node_modules/angularfire2/angularfire2');
var line_service_1 = require('../providers/line-service');
// AF2 Settings
exports.firebaseConfig = {
    apiKey: "AIzaSyDE-WMV8Pz4ZtIwReSGsK7O6uC4RqOhurY",
    authDomain: "next-80843.firebaseapp.com",
    databaseURL: "https://next-80843.firebaseio.com",
    storageBucket: "next-80843.appspot.com",
    messagingSenderId: "244563636043"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                scan_1.ScanPage,
                contact_1.ContactPage,
                home_1.HomePage,
                tabs_1.TabsPage,
                login_1.Login,
                reset_password_1.ResetPassword,
                signup_1.Signup
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp),
                angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig)
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                scan_1.ScanPage,
                contact_1.ContactPage,
                home_1.HomePage,
                tabs_1.TabsPage,
                login_1.Login,
                reset_password_1.ResetPassword,
                signup_1.Signup
            ],
            providers: [
                auth_data_1.AuthData,
                status_bar_1.StatusBar,
                splash_screen_1.SplashScreen,
                line_service_1.LineService,
                { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map