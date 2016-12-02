app.controller('ParentStudentListController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.title = 'MANAGE STUDENT';

  $scope.student_list = [
    {school: 'Carmel', name: 'Stephan'},
    {school: 'Cembridge', name: 'Alley'},
  ]

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.message = '';

  $scope.onClickEdit = function() {
    $state.go('parent_student_edit');
  }

  $scope.onClickRemove = function($index) {
    $scope.student_list.splice($index, 1);
  }

  $scope.onClickAdd = function() {
    $state.go('parent_student_add');
  }
});
