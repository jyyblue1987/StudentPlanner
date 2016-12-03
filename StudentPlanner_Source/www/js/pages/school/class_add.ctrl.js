app.controller('SchoolClassAddController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.title = 'CREATE CLASS';
  $scope.placeholder = 'Class Name';
  $scope.message = '';

  $scope.onClickAdd = function() {
    $scope.message = 'Your profile is successfully updated';
  }
});
