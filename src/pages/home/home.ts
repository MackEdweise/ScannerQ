import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LineService } from '../../providers/line-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

  public size: number;
  public lineName: string;

  constructor(public navCtrl: NavController, public lineService: LineService) {}

  ngOnInit(){
      let homeController = this;
      this.lineService.setLineSize(function(realSize){
        homeController.size = realSize;
        console.log(homeController.size);
      });
      this.lineService.getLineName(function(name){
          homeController.lineName = name;
          console.log(homeController.lineName);
      });
  }
}
