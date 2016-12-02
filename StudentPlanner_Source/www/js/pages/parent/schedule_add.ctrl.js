app.controller('ParentScheduleAddController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.title = 'ADD SCHEDULER';
  $scope.message = '';

  $scope.onClickUpdate = function() {
    $scope.message = 'Your profile is successfully updated';
  }
});
