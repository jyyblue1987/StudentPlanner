app.controller('ProfileController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory, AuthService, ApiService) {
  var vm = this;

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.$on('$ionicView.beforeEnter', function() {
    initData();
  });

  function initData() {
    vm.profile = {};
    
    vm.state_list = ApiService.getStateList();
    vm.country_list = ApiService.getCountryList();
    vm.school_list = ApiService.getSchoolList();

    $ionicLoading.show({
      template: "Loading..."
    });

    var member_id = AuthService.getMember();

    vm.profile.member_id = member_id

    ApiService.getProfile(member_id)
      .then(function(response) {
        console.log(response.data);
        var data = response.data;
        if( data.success == 1 )
        {
          vm.profile = data['Profile View'][0];
        }
        else
          toaster.pop('error', 'Profile', 'There is no Profile' );

      }).catch(function(response) {
        console.error('Gists error', response.status, response.data);
      })
      .finally(function() {
        $ionicLoading.hide();
      });
  }

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.title = 'PROFILE';
  $scope.message = '';

  $scope.onClickUpdate = function() {
    $scope.message = 'Your profile is successfully updated';
  }
});
