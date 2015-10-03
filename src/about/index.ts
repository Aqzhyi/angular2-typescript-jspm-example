/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View} from 'angular2/angular2'

@Component({
  selector: 'about'
})
@View({
  template: `
    <div class="container">
      about {{me}}
    </div>
  `
})
class about {
  me: string = 'Pleasurzy'
  constructor() {

  }
}

export default about
