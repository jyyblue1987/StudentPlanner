app.controller('StudentSubjectEditController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.title = 'MENU';

  $scope.message = '';

  $scope.onClickUpdate = function() {
    $scope.message = 'Your subject is successfully updated';
  }
});
