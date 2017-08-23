import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,
    AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { LineService } from '../../providers/line-service';

@IonicPage()
@Component({
    selector: 'page-no-phone',
    templateUrl: 'no-phone.html'
})
export class NoPhonePage {

    public nameForm;
    public serving: string;

    constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
                public loadingCtrl: LoadingController, public alertCtrl: AlertController,
                public lineService: LineService) {

        this.nameForm = formBuilder.group({
            name: ['', Validators.compose([Validators.required])]
        })
    }
    joinLine() {
        let service = this;
        if (!this.nameForm.valid) {
            console.log(this.nameForm.value);
        } else {
            this.lineService.joinWithPhone(function(){
                alert('Successfully joined with contact info.');
                service.lineService.setLineSize();
            },this.nameForm.value.name,'');
        }
    }

    ionViewDidLoad() {
        this.getServing();
    }

    getServing(){
        this.lineService.serving.subscribe(serving => this.serving = serving);
    }
}
