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

    var data = {};
    data.api_login_key = serverConfig.api_login_key;
    data.member_id = this.getMember();

    var param = $httpParamSerializer(data);

    // get class list
    this.profile.class_list = [];
    $http({
      method: 'GET',
      url: serverConfig.url + 'api_class_list_view.aspx?' + param,
    }).then(function(response) {
      console.log(response.data);
      if( response.data.success == 1 ) {
        self.profile.class_list = response.data['Class List'];
      }
    }).catch(function(response) {
        console.error('Gists error', response.status, response.data);
      })
      .finally(function() {
      });

    // get identifier list
    this.profile.identifer_list = [];
    $http({
      method: 'GET',
      url: serverConfig.url + 'api_identifier_list_view.aspx?' + param,
    }).then(function(response) {
      console.log(response.data);
      if( response.data.success == 1 ) {
        self.profile.identifier_list = response.data['Identifier List'];
      }
    }).catch(function(response) {
        console.error('Gists error', response.status, response.data);
      })
      .finally(function() {
      });

    // get subject list
    this.profile.subject_list = [];
    $http({
      method: 'GET',
      url: serverConfig.url + 'api_subject_list_view.aspx?' + param,
    }).then(function(response) {
      console.log(response.data);
      if( response.data.success == 1 ) {
        self.profile.subject_list = response.data['Subject List'];
      }
    }).catch(function(response) {
        console.error('Gists error', response.status, response.data);
      })
      .finally(function() {
      });
  }

  this.getMember = function() {
    return 501;
    //return this.profile.member_id;
  }

  this.getProfile = function() {
    return this.profile;
    //return this.profile.member_id;
  }

  this.setProfile = function(profile) {
    this.profile.data = profile;
  }
});
