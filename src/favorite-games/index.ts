/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, NgFor} from 'angular2/angular2'

@Component({selector: 'favorite-games'})
@View({
  template: `
    <div class="container">
      <h1 class="alert alert-warning">hello {{name}}</h1>

      <ul class="list-group">
        <li class="list-group-item" *ng-for="#item of games">{{ item }}</li>
      </ul>
    </div>
  `,
  directives: [
    NgFor,
  ]
})
export class FavoriteGames {

  name: string = 'Pleasurazy'
  games: string[] = this.retrieveGames()

  constructor() {
    console.log(this.name, this.games)
  }

  retrieveGames() {
    let list = [
      'Trove',
      'StarcraftII',
      'DiableIII',
    ]

    return list
  }
}
