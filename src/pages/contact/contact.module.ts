import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ContactPage } from './contact';

@NgModule({
    declarations: [
        ContactPage,
    ],

    exports: [
        ContactPage
    ]
})
export class ContactModule {}