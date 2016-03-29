import angular from 'angular'

import './services/auth'

const MODULE_NAME = 'app.core.services'

angular.module(MODULE_NAME, [
  'app.core.services.auth'
])

export default MODULE_NAME
