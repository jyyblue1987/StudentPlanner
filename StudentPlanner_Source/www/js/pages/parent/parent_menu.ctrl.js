app.controller('ParentMenuController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.list = ['Profile', 'Manage Student', 'Manage Subject', 'Manage Homework', 'Scheduler'];

  $scope.onClickMenu = function(menu) {
    if( menu == 'Profile' )
    {
      $state.go('parent_profile');
    }

    if( menu == 'Manage Student' )
    {
      $state.go('parent_student_list');
    }

    if( menu == 'Manage Subject' )
    {
      $state.go('parent_subject_list');
    }

    if( menu == 'Manage Homework' )
    {
      $state.go('parent_homework_confirm');
    }

    if( menu == 'Scheduler' )
    {
      $state.go('parent_schedule_list');
    }
  }

  $scope.onClickLogout = function() {
    $state.go('home');
  }


});
