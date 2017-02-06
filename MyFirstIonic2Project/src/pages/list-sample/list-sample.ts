import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PersonInfo } from '../../models/person-info';
import { PersonService } from '../../providers/person-service';

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-sample',
  templateUrl: 'list-sample.html'
})
export class ListSamplePage {
  public personList: Array<PersonInfo>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public personService: PersonService) {
    // this.personList = new Array<PersonInfo>();
    // this.personList.push(new PersonInfo("王小二", 20, "北京", 95));
    // this.personList.push(new PersonInfo("张三", 21, "上海", 76));
    // this.personList.push(new PersonInfo("李四", 22, "广州", 58));
    
    console.log(this.personList);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
    this.personList = this.personService.getPersonList();
  }

}
