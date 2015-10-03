/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, bootstrap} from 'angular2/angular2'
import {RouterLink} from 'angular2/router'

@Component({
  selector: 'navbar'
})
@View({
  templateUrl: './src/navbar/index.html',
  directives: [
    RouterLink,
  ]
})
class Navbar {
  constructor() {

  }
}

export default Navbar
