import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,
    AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { PhoneValidator } from '../../validators/phone';
import { LineService } from '../../providers/line-service';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public contactForm;
  public serving: string;
  public size: number;
  public lineName: string;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,
              public loadingCtrl: LoadingController, public alertCtrl: AlertController,
              public lineService: LineService) {

    this.contactForm = formBuilder.group({
      phone: ['', Validators.compose([PhoneValidator.isValid])]
    })
  }
  joinLine() {
    let service = this;
    if (!this.contactForm.valid) {
      console.log(this.contactForm.value);
    } else {
      this.lineService.joinWithPhone(function(){
        alert('Successfully joined with contact info.');
        service.lineService.setLineSize();
      },'',this.contactForm.value.phone);
    }
  }

  ionViewDidLoad() {
    this.updateLineInfo();
    this.getLineSize();
    this.getServing();
  }

  updateLineInfo(){
    let homeController = this;
    this.lineService.setServing();
    this.lineService.setLineSize();
    this.lineService.getLineName(function(name){
      homeController.lineName = name.split('_').join(' ');
      console.log(homeController.lineName);
    });
  }

  getLineSize(){
    this.lineService.lineSize.subscribe(size => this.size = size);
  }

  getServing(){
    this.lineService.serving.subscribe(serving => this.serving = serving);
  }
}
