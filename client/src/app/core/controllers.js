import angular from 'angular'

import './controllers/master'

const MODULE_NAME = 'app.core.controllers'

angular.module(MODULE_NAME, [
  'app.core.controllers.master'
])

export default MODULE_NAME
