/// <reference path="../typings/tsd.d.ts"/>

import 'zone.js'
import 'bootstrap/css/bootstrap.min.css!'
import {bootstrap, bind} from 'angular2/angular2'
import {RouterOutlet, RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router'
import {LocationStrategy, HashLocationStrategy} from 'angular2/router'
import {FirstApp} from './first-app/index'

bootstrap(FirstApp, [
  ROUTER_BINDINGS,
  bind(LocationStrategy).toClass(HashLocationStrategy),
])
