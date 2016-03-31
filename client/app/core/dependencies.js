import angular from 'angular'

import 'angular-cookies'
import 'angular-formly'
import 'angular-formly-templates-bootstrap'
import 'angular-resource'
import 'angular-sanitize'
import 'angular-socket-io'
import 'angular-ui-bootstrap'
import 'angular-ui-router'
import '../../lib/lb-services'
import io from 'socket.io-client'

const MODULE_NAME = 'app.core.dependencies'

const app = angular.module(MODULE_NAME, [
  'btford.socket-io',
  'formly',
  'formlyBootstrap',
  'lbServices',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.bootstrap',
  'ui.router'
])

app.factory('socket', (socketFactory) => socketFactory({
  prefix: '',
  ioSocket: io.connect('http://localhost:3000')
}))

export default MODULE_NAME
