import angular from 'angular'

import 'angular-cookies'
import 'angular-resource'
import 'angular-socket-io'
import 'angular-ui-bootstrap'
import 'angular-ui-router'
import '../../lib/lb-services'
import io from 'socket.io-client'

const MODULE_NAME = 'app.core.dependencies'

const app = angular.module(MODULE_NAME, [
  'btford.socket-io',
  'lbServices',
  'ngCookies',
  'ngResource',
  'ui.bootstrap',
  'ui.router'
])

app.factory('socket', (socketFactory) => socketFactory({
  prefix: '',
  ioSocket: io.connect('http://localhost:3000')
}))

export default MODULE_NAME
