app.controller('TeacherMenuController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.list = ['Profile', 'Manage Subject', 'Manage Student', 'Manage Homework'];

  $scope.onClickMenu = function(menu) {
    if( menu = 'Profile' )
    {
      $state.go('profile');
    }
  }

  $scope.onClickLogout = function() {
    $state.go('login');
  }


});
