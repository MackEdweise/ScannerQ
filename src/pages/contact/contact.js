"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var forms_1 = require('@angular/forms');
var phone_1 = require('../../validators/phone');
var ContactPage = (function () {
    function ContactPage(nav, formBuilder, loadingCtrl, alertCtrl, lineService) {
        this.nav = nav;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.lineService = lineService;
        this.contactForm = formBuilder.group({
            phone: ['', forms_1.Validators.compose([phone_1.PhoneValidator.isValid])],
            name: ['', forms_1.Validators.compose([forms_1.Validators.required])]
        });
    }
    ContactPage.prototype.joinLine = function () {
        var service = this;
        if (!this.contactForm.valid) {
            console.log(this.contactForm.value);
        }
        else {
            this.lineService.joinWithPhone(function () {
                alert('Successfully joined with contact info.');
                service.lineService.setLineSize();
            }, this.contactForm.value.name, this.contactForm.value.phone);
        }
    };
    ContactPage = __decorate([
        ionic_angular_1.IonicPage(),
        core_1.Component({
            selector: 'page-contact',
            templateUrl: 'contact.html'
        })
    ], ContactPage);
    return ContactPage;
}());
exports.ContactPage = ContactPage;
//# sourceMappingURL=contact.js.map