app.controller('ParentStudentEditController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.title = 'STUDENT';
  $scope.message = '';

  $scope.onClickUpdate = function() {
    $scope.message = 'Your profile is successfully updated';
  }
});
