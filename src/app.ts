/// <reference path="../typings/angular2/angular2.d.ts"/>

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
  template: `
    <h1>hello {{name}}</h1>

    <ul>
      <li *ng-for="#item of list">{{ item }}</li>
    </ul>
  `,
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
