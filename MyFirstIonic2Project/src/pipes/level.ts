import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Level pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'level'
})
@Injectable()
export class Level {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: number) {
    if (value >= 90) {
      return "优";
    }
    else if (value >= 75) {
      return "良";
    }
    else if (value >= 60) {
      return "中";
    }
    else {
      return "差";
    }
  }
}
