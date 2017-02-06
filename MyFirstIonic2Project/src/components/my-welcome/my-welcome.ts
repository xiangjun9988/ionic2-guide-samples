import { Component, Input } from '@angular/core';

import { PersonInfo } from '../../models/person-info';

/*
  Generated class for the MyWelcome component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'my-welcome',
  templateUrl: 'my-welcome.html'
})
export class MyWelcomeComponent {

  @Input()
  public currentPerson: PersonInfo
  constructor() {
    console.log('Hello MyWelcome Component');
  }

}
