app.controller('HomeController', function ($scope, $rootScope, $state, $http, $ionicLoading, $ionicHistory) {
  var vm = this;

  $scope.tab = 'Login';

  vm.login_as = 'Teacher';
  vm.register_as = 'Teacher';

  $scope.login = function() {
    $state.go(vm.login_as.toLowerCase() + '_login');
  }
  $scope.register = function() {
    $state.go(vm.register_as.toLowerCase() + '_register');
  }

});
