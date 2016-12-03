app.controller('SchoolSubjectAddController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.title = 'CREATE SUBJECT';
  $scope.placeholder = 'Subject Name';
  $scope.message = '';

  $scope.onClickAdd = function() {
    $scope.message = 'Your profile is successfully updated';
  }
});
