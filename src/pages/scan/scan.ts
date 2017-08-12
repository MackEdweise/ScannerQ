import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LineService } from '../../providers/line-service';

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {

  constructor(public navCtrl: NavController, public lineService: LineService) {}

  public serving: string;

  ionViewDidLoad(){
    this.getServing();
  }
  getServing(){
    this.lineService.serving.subscribe(serving => this.serving = serving);
  }
}
