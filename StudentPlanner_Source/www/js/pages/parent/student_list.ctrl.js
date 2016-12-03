app.controller('ParentStudentListController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.title = 'SCHEDULE LIST';

  $scope.student_list = [
    {school: 'New Cambridge School', name: 'Jhon',
      classes: [
        '4th Class - Green - Science',
        '4th Class - Green - Englis',
        '4th Class - Green - Maths',
      ]},
    {school: 'St Philomena School', name: 'Stephan',
      classes: [
        '2th Class - Green - Science',
        '2th Class - Green - Englis',
        '2th Class - Green - Maths',
      ]},
  ]

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.message = '';

  $scope.onClickEdit = function() {
    $state.go('parent_schedule_edit');
  }

  $scope.onClickRemove = function($index) {
    $scope.schedule_list.splice($index, 1);
  }

  $scope.onClickAdd = function() {
    $state.go('parent_schedule_add');
  }
});
