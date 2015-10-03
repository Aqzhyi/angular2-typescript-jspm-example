/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View} from 'angular2/angular2'
import {NgFor} from 'angular2/angular2'

@Component({
  selector: 'demo'
})
@View({
  templateUrl: './src/demo/index.html',
  directives: [
    NgFor,
  ]
})
class demo {
  name: string = 'Pleasurazy'
  list: string[] = this.retrieveList()

  constructor() {
    console.log(this.list)
  }

  retrieveList() {
    let list = [
      'Trove',
      'StarcraftII',
      'DiableIII',
    ]

    return list
  }
}

export default demo
