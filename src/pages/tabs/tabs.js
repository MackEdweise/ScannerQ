"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var scan_1 = require('../scan/scan');
var contact_1 = require('../contact/contact');
var home_1 = require('../home/home');
var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = home_1.HomePage;
        this.tab2Root = scan_1.ScanPage;
        this.tab3Root = contact_1.ContactPage;
    }
    TabsPage = __decorate([
        core_1.Component({
            templateUrl: 'tabs.html'
        })
    ], TabsPage);
    return TabsPage;
}());
exports.TabsPage = TabsPage;
//# sourceMappingURL=tabs.js.map