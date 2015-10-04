/// <reference path="../../typings/tsd.d.ts"/>

import {Component, View, bootstrap, NgFor, bind} from 'angular2/angular2'
import {RouterOutlet, RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router'
import {FavoriteGames} from '../favorite-games/index'
import {Navbar} from '../navbar/index'

@Component({
  selector: 'first-app'
})

@View({
  templateUrl: './src/first-app/index.html',
  directives: [
    Navbar,
    ROUTER_DIRECTIVES,
  ]
})

@RouteConfig([
  {path: '/', redirectTo: 'favorite-games'},
  {path: '/favorite-games', component: FavoriteGames, as: 'favorite-games'},
])

export class FirstApp {
  constructor() {}
}
