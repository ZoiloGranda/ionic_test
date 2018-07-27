import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html'
})
export class SliderPage {

  constructor(public navCtrl: NavController) {

  }
  
  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }

}
