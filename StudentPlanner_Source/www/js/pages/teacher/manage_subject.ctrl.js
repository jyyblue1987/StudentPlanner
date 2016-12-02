app.controller('ManageSubjectController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.title = 'MANAGE SUBJECT';

  $scope.menulist = [
    'History Class',
    'Scientific Class',
    'Maths Class',
    'Social Class',
    'Hindi Class',
  ]

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.message = '';

  $scope.onClickEdit = function() {
    $state.go('subject_edit');
  }

  $scope.onClickRemove = function($index) {
    $scope.menulist.splice($index, 1);
  }

  $scope.onClickAdd = function() {
    $state.go('subject_add');
  }
});
