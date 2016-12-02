app.controller('ScheduleListController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.title = 'SCHEDULE LIST';

  $scope.schedule_list = [
    {name: 'Stephan', date: '18/9/16'},
    {name: 'Alley', date: '17/9/16'},
  ]

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.message = '';

  $scope.onClickEdit = function() {
    $state.go('student_schedule_edit');
  }

  $scope.onClickRemove = function($index) {
    $scope.menulist.splice($index, 1);
  }

  $scope.onClickAdd = function() {
    $state.go('student_schedule_add');
  }
});
