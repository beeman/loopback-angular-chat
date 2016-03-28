import angular from 'angular'

import './controllers/list'
import './controllers/view'

const MODULE_NAME = 'app.rooms.controllers'

angular.module(MODULE_NAME, [
  'app.rooms.controllers.list',
  'app.rooms.controllers.view'
])

export default MODULE_NAME
