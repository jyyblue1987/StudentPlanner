app.controller('TeacherRegisterController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickRegister = function () {
    $state.go('teacher_menu');
  }
});