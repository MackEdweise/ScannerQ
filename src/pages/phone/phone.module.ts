/**
 * Created by marcusedwards on 2017-08-21.
 */

import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PhonePage } from './phone';

@NgModule({
    declarations: [
        PhonePage,
    ],

    exports: [
        PhonePage
    ]
})
export class PhoneModule {}