app.controller('HomeworkSendController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.title = 'HOMEWORK';
  $scope.message = '';

  $scope.data = {};
  $scope.date = moment().format('YYYY-MM-DD');

  $scope.onClickUpdate = function() {
    $scope.message = 'Your profile is successfully updated';
  }

  $scope.onSelectDate = function() {
    $scope.date = moment($scope.datetimeValue).format('YYYY-MM-DD');
  }

  $scope.$watch('data.datetimeValue', function(newValue, oldValue) {
    if( newValue == oldValue )
      return;
    $scope.date = moment(newValue).format('YYYY-MM-DD');
  });
});
