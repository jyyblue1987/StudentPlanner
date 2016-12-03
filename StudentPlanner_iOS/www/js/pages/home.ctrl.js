app.controller('HomeController', function ($scope, $rootScope, $state, $http, $ionicLoading) {
  $scope.tab = 'Login';
  $scope.login = function(mode) {
    $state.go(mode + '_login');
  }
  $scope.register = function(mode) {
    $state.go(mode + '_register');
  }
});
