/**
 * Created by marcusedwards on 2017-08-21.
 */

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NoPhonePage } from './no-phone';

@NgModule({
    declarations: [
        NoPhonePage,
    ],

    exports: [
        NoPhonePage
    ]
})
export class NoPhoneModule {}