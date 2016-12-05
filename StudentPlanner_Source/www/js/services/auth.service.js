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

  this.login = function(info) {

    var data = angular.copy(info);

    data.api_login_key = serverConfig.api_login_key;

    var param = $httpParamSerializer(data);

    var promiss = $http.get(serverConfig.url + 'api_login.aspx?' + param);

    return promiss;
  }

  this.profile = {};

  this.setMember = function(member_id) {
    this.profile.member_id = member_id;
  }

  this.getMember = function() {
    return 501;
    //return this.profile.member_id;
  }
});
