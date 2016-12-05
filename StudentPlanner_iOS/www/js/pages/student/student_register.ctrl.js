app.controller('StudentRegisterController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory, ApiService, AuthService, toaster) {
  var vm = this;

  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

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

    vm.school_id = '500';
    vm.full_name = 'STUDENT2';
    vm.address = 'NEWYORK,USA';
    vm.city = 'NEWYORK';
    vm.zipcode = '4545';
    vm.state_id = '1';
    vm.country_id = '1';
    vm.phone_no = '66666';
    vm.email_id = 'student2@ebaraha.com';
    vm.username = 'student2@ebaraha.com';
    vm.password = 'password';
    vm.re_password = 'password';
  }

  initData();

  $scope.onClickRegister = function () {
    if( vm.accept_term == false )
    {
      toaster.pop('error', 'Register', 'Please select Term & Conditions' );
      return;
    }

    if( vm.password != vm.re_password )
    {
      toaster.pop('error', 'Register', 'Password does not match' );
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

    AuthService.register('student', data)
      .then(function(response) {
        console.log(response.data);
        var data = response.data;
        if( data.success == 1 )
        {
          console.log(data.Register[0].member_id);
          AuthService.setMember(data.Register[0].member_id);
          gotoMenu();
        }
        else
          toaster.pop('error', 'Register', data.Register[0].message );

      }).catch(function(response) {
        console.error('Gists error', response.status, response.data);
      })
      .finally(function() {
        $ionicLoading.hide();
      });
  }

  function gotoMenu() {
    $state.go('student_menu');
  }
});
