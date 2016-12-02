app.controller('StudentMenuController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.list = ['Profile', 'Manage Subject', 'Manage Homework', 'Scheduler'];

  $scope.onClickMenu = function(menu) {
    if( menu == 'Profile' )
    {
      $state.go('profile');
    }

    if( menu == 'Manage Subject' )
    {
      $state.go('student_subject_edit');
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
    $state.go('home');
  }


});
