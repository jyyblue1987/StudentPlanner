app.service('ApiService', function ($http, $httpParamSerializer, serverConfig) {
  var self = this;
  this.getStateListData = function() {
    var promiss = $http({
      method: 'GET',
      url: serverConfig.url + 'api_states.aspx?api_login_key=' + serverConfig.api_login_key,
    }).then(function(response) {
        console.log(response.data);
        if( response.data.success == 1 )
          self.setStateList(response.data.States);
      }).catch(function(response) {
        console.error('Gists error', response.status, response.data);
      })
      .finally(function() {

      });

    return promiss;
  }

  this.setStateList = function(list) {
    for(var i = 0; i < list.length; i++ )
      this.state_list.push(list[i]);
  }

  this.getStateList = function() {
    return this.state_list;
  }

  this.state_list = [];


  this.getCountryListData = function() {

    var promiss = $http({
      method: 'GET',
      url: serverConfig.url + 'api_country.aspx?api_login_key=' + serverConfig.api_login_key,
    }).then(function(response) {
      console.log(response.data);
      if( response.data.success == 1 )
        self.setCountryList(response.data.Country);
    }).catch(function(response) {
        console.error('Gists error', response.status, response.data);
      })
      .finally(function() {

      });

    return promiss;
  }

  this.setCountryList = function(list) {
    for(var i = 0; i < list.length; i++ )
      this.country_list.push(list[i]);
  }

  this.getCountryList = function() {
    return this.country_list;
  }

  this.country_list = [];

  this.getSchoolListData = function() {

    var promiss = $http({
      method: 'GET',
      url: serverConfig.url + 'api_school.aspx?api_login_key=' + serverConfig.api_login_key,
    }).then(function(response) {
      console.log(response.data);
      if( response.data.success == 1 )
        self.setSchoolList(response.data['School List']);
    }).catch(function(response) {
        console.error('Gists error', response.status, response.data);
      })
      .finally(function() {

      });

    return promiss;
  }

  this.setSchoolList = function(list) {
    for(var i = 0; i < list.length; i++ )
      this.school_list.push(list[i]);
  }

  this.getSchoolList = function() {
    return this.school_list;
  }

  this.school_list = [];

});
