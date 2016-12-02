app.controller('TeacherMenuController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.list = ['Profile', 'Manage Subject', 'Manage Student', 'Manage Homework'];

  $scope.onClickMenu = function(menu) {
    if( menu == 'Profile' )
    {
      $state.go('profile');
    }

    if( menu == 'Manage Subject' )
    {
      $state.go('managesubject');
    }

    if( menu == 'Manage Student' )
    {
      $state.go('student_list');
    }

    if( menu == 'Manage Homework' )
    {
      $state.go('homework_list');
    }
  }

  $scope.onClickLogout = function() {
    $state.go('login');
  }


});
