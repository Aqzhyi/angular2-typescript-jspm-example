/// <reference path="../typings/tsd.d.ts"/>

import 'bootstrap/css/bootstrap.min.css!'
import {Component, View, bootstrap, bind} from 'angular2/angular2'
import {ROUTER_BINDINGS, RouteConfig, RouterOutlet} from 'angular2/router'
import {LocationStrategy, HashLocationStrategy} from 'angular2/router'
import demo from './demo/index'
import about from './about/index'
import navbar from './navbar/index'

@Component({
  selector: 'app'
})

@View({
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
  directives: [
    navbar,
    RouterOutlet,
  ]
})

@RouteConfig([
  { path: '/', component: demo, as: 'demo' },
  { path: '/about', component: about, as: 'about' },
])

class app {

}

bootstrap(app, [
  ROUTER_BINDINGS,
  bind(LocationStrategy).toClass(HashLocationStrategy),
])
