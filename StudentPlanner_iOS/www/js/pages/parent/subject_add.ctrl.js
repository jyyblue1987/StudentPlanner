app.controller('ParentSubjectAddController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.title = 'ADD SUBJECT';
  $scope.message = '';

  $scope.onClickAdd = function() {
    $scope.message = 'Your subject is successfully added';
  }
});
