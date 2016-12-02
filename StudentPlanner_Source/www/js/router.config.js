app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $stateProvider
      .state('index', { url: '/', templateUrl: 'templates/home.html', controller: 'HomeController'})
      .state('login', { url: '/login', templateUrl: 'templates/login.html', controller: 'LoginController'})
      .state('register', { url: '/register', templateUrl: 'templates/register.html', controller: 'RegisterController'})
      .state('teachermenu', { url: '/teachermenu', templateUrl: 'templates/teacher_menu.html', controller: 'TeacherMenuController'})
      .state('profile', { url: '/profile', templateUrl: 'templates/profile.html', controller: 'ProfileController'})
      .state('managesubject', { url: '/managesubject', templateUrl: 'templates/manage_subject.html', controller: 'ManageSubjectController'})
      $urlRouterProvider.otherwise('/');
  })
  .constant("myConfig", {
    "url": "https://evening-eyrie-91165.herokuapp.com",
    "port": "80"
  });
