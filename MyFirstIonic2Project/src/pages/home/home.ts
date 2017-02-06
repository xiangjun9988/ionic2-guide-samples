import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public message: string;
  constructor(public navCtrl: NavController) {
    this.message = "Hello World!";
  }

}
