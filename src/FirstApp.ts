/// <reference path="../typings/tsd.d.ts"/>

import 'bootstrap/css/bootstrap.min.css!'
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
    <div class="container">
      <h1 class="alert alert-warning">hello {{name}}</h1>

      <ul class="list-group">
        <li class="list-group-item" *ng-for="#item of list">{{ item }}</li>
      </ul>
    </div>
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
