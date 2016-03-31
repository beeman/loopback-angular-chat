import angular from 'angular'

import './components'
import './controllers'
import './routes'
import './services'

const MODULE_NAME = 'app.rooms'

angular.module(MODULE_NAME, [
  'app.rooms.components',
  'app.rooms.controllers',
  'app.rooms.routes',
  'app.rooms.services'
])

export default MODULE_NAME
