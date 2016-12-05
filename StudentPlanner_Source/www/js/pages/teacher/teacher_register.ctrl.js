app.controller('TeacherRegisterController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory, $httpParamSerializer, serverConfig, ApiService) {
  var vm = this;

  function initData() {
    vm.state_list = ApiService.getStateList();
    if( vm.state_list.length > 0 )
      vm.state_id = vm.state_list[0].State_ID;
  }

  initData();

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickRegister = function () {
    $ionicLoading.show({
      template: "Loading..."
    });

    var data = {};

    data.api_login_key = serverConfig.api_login_key;
    data.register_as = 'school';
    data.school_id = vm.school_id;
    data.full_name = vm.full_name;
    data.address = vm.address;
    data.city = vm.city;
    data.zipcode = vm.zipcode;
    data.state_id = vm.state_id;
    data.country_id = vm.country_id;
    data.phone_no = vm.phone_no;
    data.email_id = vm.email_id;
    data.username = vm.username;
    data.password = vm.password;

    var param = $httpParamSerializer(data);

    $http.get(serverConfig.url + 'api_register.aspx?' + param)
      .then(function(response) {
        $scope.onSelectTicket(response.data);
      }).catch(function(response) {
        console.error('Gists error', response.status, response.data);
      })
      .finally(function() {

      });
  }

  function gotoMenu() {
    $state.go('teacher_menu');
  }


});
