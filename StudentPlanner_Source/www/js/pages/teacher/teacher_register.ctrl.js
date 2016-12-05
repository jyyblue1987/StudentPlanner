app.controller('TeacherRegisterController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory, $httpParamSerializer, serverConfig, ApiService, toaster) {
  var vm = this;

  function initData() {
    vm.state_list = ApiService.getStateList();
    if( vm.state_list.length > 0 )
      vm.state_id = vm.state_list[0].State_ID;

    vm.country_list = ApiService.getCountryList();
    if( vm.country_list.length > 0 )
      vm.country_id = vm.country_list[0].Country_ID;

    vm.school_list = ApiService.getSchoolList();
    if( vm.school_list.length > 0 )
      vm.school_id = vm.school_list[0].School_ID;

    vm.accept_term = false;
  }

  initData();

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.onClickRegister = function () {
    if( vm.accept_term == false )
    {
      toaster.pop('error', 'Register', 'Please select Term & Conditions' );
      return;
    }


    $ionicLoading.show({
      template: "Loading..."
    });

    var data = {};

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

    ApiService.register('teacher', data)
      .then(function(response) {
        console.log(response.data);
      }).catch(function(response) {
        console.error('Gists error', response.status, response.data);
      })
      .finally(function() {
        $ionicLoading.hide();
      });
  }

  function gotoMenu() {
    $state.go('teacher_menu');
  }


});
