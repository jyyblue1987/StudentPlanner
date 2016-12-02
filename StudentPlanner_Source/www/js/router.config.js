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

      .state('parent_login', { url: '/parent/login', templateUrl: 'templates/login.html', controller: 'ParentLoginController'})
      .state('parent_register', { url: '/parent/register', templateUrl: 'templates/register.html', controller: 'ParentRegisterController'})
      .state('parent_menu', { url: '/parent/menu', templateUrl: 'templates/menu.html', controller: 'ParentMenuController'})
      .state('parent_profile', { url: '/parent/profile', templateUrl: 'templates/parent/profile.html', controller: 'ParentProfileController'})
      .state('parent_student_list', { url: '/parent/student/list', templateUrl: 'templates/parent/student_list.html', controller: 'ParentStudentListController'})
      .state('parent_student_add', { url: '/parent/student/add', templateUrl: 'templates/parent/student_add.html', controller: 'ParentStudentAddController'})
      .state('parent_student_edit', { url: '/parent/student/edit', templateUrl: 'templates/parent/student_edit.html', controller: 'ParentStudentEditController'})
      .state('parent_subject_list', { url: '/parent/subject/list', templateUrl: 'templates/parent/subject_list.html', controller: 'ParentSubjectListController'})
      .state('parent_subject_add', { url: '/parent/subject/add', templateUrl: 'templates/parent/subject_add.html', controller: 'ParentSubjectAddController'})
      .state('parent_subject_edit', { url: '/parent/subject/edit', templateUrl: 'templates/parent/subject_edit.html', controller: 'ParentSubjectEditController'})

    $urlRouterProvider.otherwise('/');
  })
  .constant("myConfig", {
    "url": "https://evening-eyrie-91165.herokuapp.com",
    "port": "80"
  });
