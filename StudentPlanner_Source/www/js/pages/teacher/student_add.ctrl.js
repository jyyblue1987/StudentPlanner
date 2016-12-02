app.controller('StudentAddController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogout = function() {
    $state.go('login');
  }

  $scope.title = 'ADD STUDENT';
  $scope.message = '';

  $scope.onClickUpdate = function() {
    $scope.message = 'Your profile is successfully updated';
  }
});
