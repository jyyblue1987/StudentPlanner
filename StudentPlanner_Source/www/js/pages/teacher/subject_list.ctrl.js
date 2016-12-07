app.controller('TeacherSubjectListController', function ($scope, $rootScope, $state, $http, $ionicLoading,$ionicHistory, $httpParamSerializer, serverConfig, AuthService) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };

  $scope.$on('$ionicView.beforeEnter', function() {
    initData();
  });

  function initData() {
    $scope.title = 'MANAGE SUBJECT';

    $scope.subject_list = [];

    var data = {};
    data.api_login_key = serverConfig.api_login_key;
    data.member_id = AuthService.getMember();

    var param = $httpParamSerializer(data);

    $ionicLoading.show({
      template: "Loading..."
    });

    $http({
      method: 'GET',
      url: serverConfig.url + 'api_manage_subject_list.aspx?' + param,
    }).then(function(response) {
      console.log(response.data);
      if( response.data.success == 1 ) {
        $scope.subject_list = response.data['Manage Subject List'];
      }
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

  $scope.message = '';

  $scope.onClickEdit = function(row) {
    $state.go('teacher_subject_edit', {param: row});
  }

  $scope.onClickRemove = function($index) {
    $scope.menulist.splice($index, 1);
  }

  $scope.onClickAdd = function() {
    $state.go('teacher_subject_add');
  }
});
