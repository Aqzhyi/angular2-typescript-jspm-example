/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, bootstrap, Inject} from 'angular2/angular2'
import {ROUTER_DIRECTIVES, Location} from 'angular2/router'

@Component({
  selector: 'navbar'
})
@View({
  templateUrl: './src/navbar/index.html',
  directives: [
    ROUTER_DIRECTIVES,
  ]
})
export class Navbar {
  constructor() {}
}
