app.controller('SchoolLoginController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogin = function () {
    $state.go('school_menu');
  }
});
