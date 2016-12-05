app.service('ApiService', function ($http, serverConfig) {
  this.getStateListData = function() {

    var promiss = $http({
      method: 'GET',
      url: serverConfig.url + 'api_states.aspx?api_login_key=' + serverConfig.api_login_key,
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

});
