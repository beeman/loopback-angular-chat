import angular from 'angular'

import templateApp from './templates/app.html'
import templateLogin from './templates/login.html'
import templateRegister from './templates/register.html'

const MODULE_NAME = 'app.core.routes'

const app = angular.module(MODULE_NAME, [])

app.config(($stateProvider) => $stateProvider
  .state('app', {
    abstract: true,
    templateUrl: templateApp
  })
  .state('app.home', {
    url: '/',
    template: '<h1>home</h1>',
    controller: ($state) => $state.go('app.rooms.list')
  })
  .state('login', {
    url: '/login',
    controller: 'AuthCtrl',
    templateUrl: templateLogin
  })
  .state('register', {
    url: '/register',
    controller: 'AuthCtrl',
    templateUrl: templateRegister
  })
)

app.config(($urlRouterProvider) => $urlRouterProvider.otherwise('/'))

export default MODULE_NAME
