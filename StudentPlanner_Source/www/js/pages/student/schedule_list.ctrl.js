app.controller('ScheduleListController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.title = 'SCHEDULE LIST';

  $scope.menulist = [
    '1th Class - Blue - English',
    '4th Class - Green - Science',
    '6th Class - Orange - Germany',
  ]

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.message = '';

  $scope.onClickEdit = function() {
    $state.go('student_edit');
  }

  $scope.onClickRemove = function($index) {
    $scope.menulist.splice($index, 1);
  }

  $scope.onClickAdd = function() {
    $state.go('student_schedule_add');
  }
});
