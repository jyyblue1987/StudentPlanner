app.constant("serverConfig", {
    "url": "http://student.ebaraha.com/",
    "port": "80",
    "api_login_key": '12345678'
  })
  .config(function($ionicConfigProvider) {
    $ionicConfigProvider.views.swipeBackEnabled(true);
  });
