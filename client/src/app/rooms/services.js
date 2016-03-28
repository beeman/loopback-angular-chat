import angular from 'angular'

import './services/rooms-service'

const MODULE_NAME = 'app.rooms.services'

angular.module(MODULE_NAME, [
  'app.rooms.services.rooms-service'
])

export default MODULE_NAME
