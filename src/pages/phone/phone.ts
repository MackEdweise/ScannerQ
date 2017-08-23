import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ScanPage } from'../scan/scan';
import { ContactPage } from'../contact/contact';
import { LineService } from '../../providers/line-service';

@Component({
    selector: 'page-phone',
    templateUrl: 'phone.html'
})

export class PhonePage {

    public size: number;
    public serving: string;
    public lineName: string;

    constructor(public nav: NavController, public navParams: NavParams,
                public loadingCtrl: LoadingController, public navCtrl: NavController,
                public lineService: LineService) {}


    ionViewDidLoad() {
        this.updateLineInfo();
        this.getServing();
        this.getLineSize();
    }

    ngOnInit(){
        this.updateLineInfo();
        this.getLineSize();
        this.getServing();
    }

    updateLineInfo(){
        let phoneController = this;
        this.lineService.setServing();
        this.lineService.setLineSize();
        this.lineService.getLineName(function(name){
            phoneController.lineName = name.split('_').join(' ');
        });
    }

    getLineSize(){
        this.lineService.lineSize.subscribe(size => this.size = size);
    }

    getServing(){
        this.lineService.serving.subscribe(serving => this.serving = serving);
    }

    goToScan(): void {
        this.nav.push(ScanPage);
    }

    goToContact(): void {
        this.nav.push(ContactPage);
    }
}
