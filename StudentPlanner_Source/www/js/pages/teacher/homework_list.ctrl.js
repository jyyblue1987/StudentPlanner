app.controller('HomeworkListController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.title = 'MANAGE HOMEWORK';

  $scope.menulist = [
    '1th Class - Blue - English',
    '4th Class - Green - Science',
    '6th Class - Orange - Germany',
  ]

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.message = '';

  $scope.onClickEdit = function() {
    $state.go('homework_add');
  }

  $scope.onClickMenu = function($index) {
    $state.go('homework_sublist');
  }

});
