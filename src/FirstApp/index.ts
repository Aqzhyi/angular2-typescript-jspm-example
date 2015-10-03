/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, bootstrap, NgFor} from 'angular2/angular2'

let list = [
  'Trove',
  'StarcraftII',
  'DiableIII',
]

@Component({
  selector: 'first-app'
})

@View({
  templateUrl: './src/FirstApp/index.html',
  directives: [NgFor]
})

class FirstApp {
  name: string = 'Pleasurazy'
  list: string[] = list

  constructor() {
    console.log(this.list)
  }
}

bootstrap(FirstApp)
