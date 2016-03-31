import angular from 'angular'

function AuthCtrl ($scope, Auth) {
  $scope.signup = function (newUser) {
    Auth.signup(newUser)
  }

  $scope.login = function (user) {
    Auth.login(user)
  }

  $scope.loginFields = [{
    key: 'email',
    type: 'input',
    templateOptions: {
      required: true,
      label: 'Email'
    }
  }, {
    key: 'password',
    type: 'input',
    templateOptions: {
      type: 'password',
      required: true,
      label: 'Password'
    }
  }]

  $scope.RegisterFields = [
    {
      key: 'firstName',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'First Name'
      }
    }, {
      key: 'lastName',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'Last Name'
      }
    }, {
      key: 'email',
      type: 'input',
      templateOptions: {
        required: true,
        label: 'Email'
      }
    }, {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        required: true,
        label: 'Password'
      }
    }]
}

const MODULE_NAME = 'app.core.controllers.auth'

angular.module(MODULE_NAME, [])
  .controller('AuthCtrl', AuthCtrl)

export default MODULE_NAME
