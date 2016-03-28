import angular from 'angular'

import './core/index'
import './rooms/index'

const MODULE_NAME = 'app'

angular.module(MODULE_NAME, [
  'app.core',
  'app.rooms'
])

export default MODULE_NAME
