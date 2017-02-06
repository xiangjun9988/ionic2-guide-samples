import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the PipeSample page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pipe-sample',
  templateUrl: 'pipe-sample.html'
})
export class PipeSamplePage {
  public message: string;
  public currentDate: number = Date.now();
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PipeSamplePage');
  }

}
