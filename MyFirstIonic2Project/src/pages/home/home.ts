import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AppAboutPage } from '../app-about/app-about';
import { ListSamplePage } from '../list-sample/list-sample';
import { PersonInfo } from '../../models/person-info';
import { PipeSamplePage } from '../pipe-sample/pipe-sample';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public message: string;
  public person: PersonInfo;
  public isShowWelcome: boolean;
  public switchValue: string;
  constructor(public navCtrl: NavController) {
    this.message = "Hello World!";
    this.person = new PersonInfo("王小二", 20, "北京");
  }
  navToAbout() {
    this.navCtrl.push(AppAboutPage);
  }

  addAge(person: PersonInfo) {
    person.age = person.age + 1;
  }

  changeWelcomeStatus() {
    this.isShowWelcome = !this.isShowWelcome;
  }

  navToList(){
    this.navCtrl.push(ListSamplePage);
  }

  navToPipe(){
    this.navCtrl.push(PipeSamplePage);
  }

}
