import angular from 'angular'

import 'angular-cookies'
import 'angular-resource'
import 'angular-ui-bootstrap'
import 'angular-ui-router'
import '../../lib/lb-services'

const MODULE_NAME = 'app.core.dependencies'

angular.module(MODULE_NAME, [
  'ui.bootstrap',
  'ui.router',
  'ngCookies',
  'ngResource',
  'lbServices'
])

export default MODULE_NAME
