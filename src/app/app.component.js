"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var login_1 = require('../pages/login/login');
var home_1 = require('../pages/home/home');
var firebase_1 = require('firebase');
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = login_1.Login;
        var config = {
            apiKey: "AIzaSyDE-WMV8Pz4ZtIwReSGsK7O6uC4RqOhurY",
            authDomain: "next-80843.firebaseapp.com",
            databaseURL: "https://next-80843.firebaseio.com",
            storageBucket: "next-80843.appspot.com",
            messagingSenderId: "244563636043"
        };
        firebase_1["default"].initializeApp(config);
        firebase_1["default"].auth().onAuthStateChanged(function (user) {
            if (!user) {
                console.log("not login");
                _this.rootPage = login_1.Login;
            }
            else {
                console.log("login");
                _this.rootPage = home_1.HomePage;
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        core_1.Component({
            templateUrl: 'app.html'
        })
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
//# sourceMappingURL=app.component.js.map