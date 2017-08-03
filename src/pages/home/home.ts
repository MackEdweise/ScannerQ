import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// declare var scannerAns: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // scanObj: any;
  // text: string;

  constructor(public navCtrl: NavController) {

    // this.scanObj = new scannerAns();
    // this.text = this.scanObj.displayContents();
  }

}
