app.controller('ParentScheduleEditController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.title = 'EDIT SCHEDULER';
  $scope.message = '';

  $scope.onClickUpdate = function() {
    $scope.message = 'Your profile is successfully updated';
  }

  $scope.data = {};
  $scope.date = moment().format('YYYY-MM-DD');
  $scope.time = moment().format('HH:mm');

  $scope.$watch('data.dateValue', function(newValue, oldValue) {
    if( newValue == oldValue )
      return;
    $scope.date = moment(newValue).format('YYYY-MM-DD');
  });

  $scope.$watch('data.timeValue', function(newValue, oldValue) {
    if( newValue == oldValue )
      return;
    $scope.time = moment(newValue).format('HH:ss');
  });
});
