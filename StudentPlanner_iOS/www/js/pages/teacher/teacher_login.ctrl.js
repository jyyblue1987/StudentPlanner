app.controller('TeacherLoginController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogin = function () {
    $state.go('teacher_menu');
  }
});