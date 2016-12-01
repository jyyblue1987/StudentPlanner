app.controller('HomeController', function ($scope, $rootScope, $state, $http, $ionicLoading) {
  $scope.tab = 'Login';
  $scope.login = function() {
    $state.go('login');
  }
  $scope.register = function() {
    $state.go('register');
  }
});
