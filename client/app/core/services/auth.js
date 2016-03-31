import angular from 'angular'

function Auth ($rootScope, User, $location) {
  var self = {
    signup: function (data) {
      User.create(data, function () {
        User.login(data, function (data) {
          self.currentUser = data.user
          $rootScope.islogged = true
          $location.path('/')
        })
      })
    },
    login: function (user) {
      User.login(user, function (data) {
        self.currentUser = data.user
        console.log(self.currentUser)
        $rootScope.islogged = true
        if (typeof $location.nextAfterLogin === 'undefined') {
          $location.path('/#/rooms')
        } else {
          $location.path($location.nextAfterLogin)
        }
      })
    },
    logout: function () {
      User.logout(function () {
        $location.path('/')
        $rootScope.islogged = false
        self.currentUser = null
      })
    },
    ensureCurrentUser: function (cb) {
      if (User.isAuthenticated() && self.currentUser == null) {
        $rootScope.islogged = true
        User.getCurrent(function (data) {
          self.currentUser = data
          cb()
        })
      }
    },
    currentUser: null
  }

  return self
}

const MODULE_NAME = 'app.core.services.auth'

angular.module(MODULE_NAME, [])
  .service('Auth', Auth)

export default MODULE_NAME
