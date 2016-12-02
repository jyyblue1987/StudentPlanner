app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $stateProvider
      .state('index', { url: '/', templateUrl: 'templates/home.html', controller: 'HomeController'})
      .state('login', { url: '/login', templateUrl: 'templates/login.html', controller: 'LoginController'})
      .state('register', { url: '/register', templateUrl: 'templates/register.html', controller: 'RegisterController'})
      .state('teachermenu', { url: '/teachermenu', templateUrl: 'templates/teacher_menu.html', controller: 'TeacherMenuController'})
      .state('profile', { url: '/profile', templateUrl: 'templates/profile.html', controller: 'ProfileController'})

      .state('managesubject', { url: '/managesubject', templateUrl: 'templates/manage_subject.html', controller: 'ManageSubjectController'})
      .state('subject_add', { url: '/subject_add', templateUrl: 'templates/subject_add.html', controller: 'SubjectAddController'})
      .state('subject_edit', { url: '/subject_edit', templateUrl: 'templates/subject_edit.html', controller: 'SubjectEditController'})

      .state('student_list', { url: '/student_list', templateUrl: 'templates/item_list.html', controller: 'StudentListController'})
      .state('student_add', { url: '/student_add', templateUrl: 'templates/student_add.html', controller: 'StudentAddController'})
      .state('student_edit', { url: '/student_edit', templateUrl: 'templates/student_edit.html', controller: 'StudentEditController'})
      $urlRouterProvider.otherwise('/');
  })
  .constant("myConfig", {
    "url": "https://evening-eyrie-91165.herokuapp.com",
    "port": "80"
  });
