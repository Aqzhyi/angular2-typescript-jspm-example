/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, bootstrap} from 'angular2/angular2'

@Component({
  selector: 'navbar'
})
@View({
  templateUrl: './src/navbar/index.html'
})
class Navbar {
  constructor() {

  }
}

bootstrap(Navbar)
