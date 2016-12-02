app.controller('ManageSubjectController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.menulist = [
    'History Class',
    'Scientific Class',
    'Maths Class',
    'Social Class',
    'Hindi Class',
  ]

  $scope.onClickLogout = function() {
    $state.go('login');
  }

  $scope.message = '';

  $scope.onClickEdit = function() {
    $state.go('subject_edit');
  }

  $scope.onClickRemove = function($index) {
    $scope.menulist.splice($index, 1);
  }
});
