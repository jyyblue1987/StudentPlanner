app.service('AuthService', function ($http, $httpParamSerializer, serverConfig) {
  var self = this;

  this.register = function(register_as, info) {

    var data = angular.copy(info);

    data.api_login_key = serverConfig.api_login_key;
    data.register_as = register_as;

    var param = $httpParamSerializer(data);

    var promiss = $http.get(serverConfig.url + 'api_register.aspx?' + param);

    return promiss;
  }

  this.setProfile = function(profile) {

  }

});
