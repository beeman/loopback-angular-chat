import angular from 'angular'

import templateList from './templates/list.html'
import templateView from './templates/view.html'

const MODULE_NAME = 'app.rooms.routes'

const app = angular.module(MODULE_NAME, [])

app.config(($stateProvider) => $stateProvider
  .state('app.rooms', {
    abstract: true,
    template: '<ui-view></ui-view>'
  })
  .state('app.rooms.list', {
    url: '/rooms',
    resolve: {
      rooms: (RoomsService) => RoomsService.find()
    },
    controller: 'RoomListCtrl',
    controllerAs: 'ctrl',
    templateUrl: templateList
  })
  .state('app.rooms.view', {
    url: '/rooms/:roomId',
    resolve: {
      room: ($stateParams, RoomsService) => RoomsService.findById($stateParams.roomId)
    },
    controller: 'RoomViewCtrl',
    controllerAs: 'ctrl',
    templateUrl: templateView
  })
)

export default MODULE_NAME
