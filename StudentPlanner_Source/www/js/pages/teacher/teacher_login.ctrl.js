app.controller('TeacherLoginController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory, toaster, AuthService) {
  var vm = this;
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  function initData() {
    vm.email_id = 'teacher2@ebaraha.com';
    vm.password = 'password';
  }

  initData();

  $scope.onClickLogin = function () {
    var data = {};

    data.email_id = vm.email_id;
    data.password = vm.password;

    $ionicLoading.show({
      template: "Loading..."
    });

    AuthService.login(data)
      .then(function(response) {
        console.log(response.data);
        var data = response.data;
        if( data.success == 1 )
        {
          console.log(data.Login[0].member_id);
          AuthService.setMember(data.Login[0].member_id);
          gotoMenu();
        }
        else
          toaster.pop('error', 'Login', data.Login[0].message );

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
