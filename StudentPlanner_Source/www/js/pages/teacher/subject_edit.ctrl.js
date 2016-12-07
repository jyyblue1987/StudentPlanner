app.controller('SubjectEditController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory, $stateParams, $httpParamSerializer,  serverConfig, AuthService, toaster) {
  var vm = this;

  vm.subject = $stateParams.param;

  initData();

  function initData() {
    vm.subject_data = {};

    $ionicLoading.show({
      template: "Loading..."
    });

    var data = {};
    data.api_login_key = serverConfig.api_login_key;
    if( vm.subject )
      data.id = vm.subject.ID;

    var param = $httpParamSerializer(data);

    $http({
      method: 'GET',
      url: serverConfig.url + 'api_manage_subject_view.aspx?' + param,
    }).then(function(response) {
      console.log(response.data);
      if( response.data.success == 1 ) {
        vm.subject_data = response.data['Manage Subject View'][0];
      }
    }).catch(function(response) {
        console.error('Gists error', response.status, response.data);
      })
      .finally(function() {
        $ionicLoading.hide();
      });

    var profile = AuthService.getProfile();
    vm.class_list = profile.class_list;
    vm.identifier_list = profile.identifier_list;
    vm.subject_list = profile.subject_list;
  }


  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickLogout = function() {
    $state.go('home');
  }

  $scope.message = '';

  $scope.onClickUpdate = function() {
    $ionicLoading.show({
      template: "Loading..."
    });

    var data = angular.copy(vm.subject_data);

    data.api_login_key = serverConfig.api_login_key;
    data.member_id = AuthService.getMember();

    var param = $httpParamSerializer(data);

    $http.get(serverConfig.url + 'api_manage_subject.aspx?' + param)
      .then(function(response) {
        console.log(response.data);
        var data = response.data;
        if( data.success == 1 )
        {
          $scope.message = 'Subject is successfully updated';
        }
        else
          toaster.pop('info', 'Subject', data['Manage Subject'][0].message );

      }).catch(function(response) {
        console.error('Gists error', response.status, response.data);
      })
      .finally(function() {
        $ionicLoading.hide();
      });
  }
});
