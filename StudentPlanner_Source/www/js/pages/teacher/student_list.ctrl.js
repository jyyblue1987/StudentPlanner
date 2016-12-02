app.controller('StudentListController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.title = 'MANAGE STUDENT';

  $scope.menulist = [
    'Aney',
    'Georgy',
    'Herry',
    'Rosy',
    'Stephan',
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
    $state.go('student_add');
  }
});
