app.controller('TeacherMenuController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogout = function() {
    $state.go('login');
  }

  $scope.list = ['Profile', 'Manage Subject', 'Manage Student', 'Manage Homework'];
});
