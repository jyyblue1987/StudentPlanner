app.controller('SchoolMenuController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.title = 'SCHOOL';

  $scope.list = ['Create Class', 'Create Subject', 'Create Identifier'];

  $scope.onClickMenu = function(menu) {
    if (menu == 'Create Class') {
      $state.go('school_class_create');
    }

    if (menu == 'Create Subject') {
      $state.go('school_subject_create');
    }

    if (menu == 'Create Identifier') {
      $state.go('school_identifier_create');
    }
  }

  $scope.onClickLogout = function() {
    $state.go('home');
  }
});
