app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $stateProvider
      .state('home', { url: '/', templateUrl: 'templates/home.html', controller: 'HomeController'})
      .state('login', { url: '/login', templateUrl: 'templates/login.html', controller: 'LoginController'})
      .state('register', { url: '/register', templateUrl: 'templates/register.html', controller: 'RegisterController'})
      .state('profile', { url: '/profile', templateUrl: 'templates/profile.html', controller: 'ProfileController'})

      .state('teacher_login', { url: '/teacher/login', templateUrl: 'templates/login.html', controller: 'TeacherLoginController'})
      .state('teacher_register', { url: '/teacher/register', templateUrl: 'templates/register.html', controller: 'TeacherRegisterController'})
      .state('teacher_menu', { url: '/teacher/menu', templateUrl: 'templates/menu.html', controller: 'TeacherMenuController'})

      .state('managesubject', { url: '/managesubject', templateUrl: 'templates/manage_subject.html', controller: 'ManageSubjectController'})
      .state('subject_add', { url: '/subject_add', templateUrl: 'templates/subject_add.html', controller: 'SubjectAddController'})
      .state('subject_edit', { url: '/subject_edit', templateUrl: 'templates/subject_edit.html', controller: 'SubjectEditController'})

      .state('student_list', { url: '/student_list', templateUrl: 'templates/item_list.html', controller: 'StudentListController'})
      .state('student_add', { url: '/student_add', templateUrl: 'templates/student_add.html', controller: 'StudentAddController'})
      .state('student_edit', { url: '/student_edit', templateUrl: 'templates/student_edit.html', controller: 'StudentEditController'})

      .state('homework_list', { url: '/homework_list', templateUrl: 'templates/homework_list.html', controller: 'HomeworkListController'})
      .state('homework_add', { url: '/homework_add', templateUrl: 'templates/homework_add.html', controller: 'HomeworkAddController'})
      .state('homework_sublist', { url: '/homework_sublist', templateUrl: 'templates/homework_sublist.html', controller: 'HomeworkSublistController'})
      .state('homework_send', { url: '/homework_send', templateUrl: 'templates/homework_send.html', controller: 'HomeworkSendController'})

      .state('student_login', { url: '/student/login', templateUrl: 'templates/login.html', controller: 'StudentLoginController'})
      .state('student_register', { url: '/student/register', templateUrl: 'templates/register.html', controller: 'StudentRegisterController'})
      .state('student_menu', { url: '/student/menu', templateUrl: 'templates/menu.html', controller: 'StudentMenuController'})
      .state('student_subject_edit', { url: '/student/subject/edit', templateUrl: 'templates/student/subject_edit.html', controller: 'StudentSubjectEditController'})
      .state('student_homework_confirm', { url: '/student/homework/confirm', templateUrl: 'templates/student/homework_confirm.html', controller: 'HomeworkConfirmController'})
      .state('student_schedule_list', { url: '/student/schedule/list', templateUrl: 'templates/student/schedule_list.html', controller: 'ScheduleListController'})
      .state('student_schedule_add', { url: '/student/schedule/add', templateUrl: 'templates/student/schedule_add.html', controller: 'ScheduleAddController'})
      .state('student_schedule_edit', { url: '/student/schedule/edit', templateUrl: 'templates/student/schedule_add.html', controller: 'ScheduleEditController'})

      $urlRouterProvider.otherwise('/');
  })
  .constant("myConfig", {
    "url": "https://evening-eyrie-91165.herokuapp.com",
    "port": "80"
  });
