import angular from 'angular'

import templateApp from './templates/app.html'
import templateTables from './templates/login.html'

const MODULE_NAME = 'app.core.routes'

const app = angular.module(MODULE_NAME, [])

app.config(($stateProvider) => $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: templateApp
  })
  .state('app.home', {
    url: '/',
    controller: ($state) => $state.go('app.rooms.list')
  })
  .state('login', {
    url: '/login',
    templateUrl: templateTables
  })
)

app.config(($urlRouterProvider) => $urlRouterProvider.otherwise('/'))

export default MODULE_NAME
