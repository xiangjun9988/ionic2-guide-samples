import { Injectable } from '@angular/core';
import { PersonInfo } from '../models/person-info';

/*
  Generated class for the PersonService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PersonService {

  constructor() {
    console.log('Hello PersonService Provider');
  }

  /**
   * 获取所有人员列表
   * 
   * @returns
   * 
   * @memberOf PersonService
   */
  getPersonList() {
    let personList: Array<PersonInfo> = new Array<PersonInfo>();
    personList.push(new PersonInfo("王小二", 20, "北京", 95));
    personList.push(new PersonInfo("张三", 21, "上海", 76));
    personList.push(new PersonInfo("李四", 22, "广州", 58));
    return personList;
  }

}
