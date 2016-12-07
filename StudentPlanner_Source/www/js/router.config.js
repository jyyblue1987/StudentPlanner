app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $stateProvider
      .state('home', { cache: false, url: '/', templateUrl: 'templates/home.html', controller: 'HomeController as vm'})
      .state('login', { url: '/login', templateUrl: 'templates/login.html', controller: 'LoginController as vm'})
      .state('register', { url: '/register', templateUrl: 'templates/register.html', controller: 'RegisterController as vm'})
      .state('profile', { url: '/profile', templateUrl: 'templates/profile.html', controller: 'ProfileController as vm'})

      .state('teacher_login', { url: '/teacher/login', templateUrl: 'templates/login.html', controller: 'TeacherLoginController as vm'})
      .state('teacher_register', { url: '/teacher/register', templateUrl: 'templates/register.html', controller: 'TeacherRegisterController as vm'})
      .state('teacher_menu', { url: '/teacher/menu', templateUrl: 'templates/menu.html', controller: 'TeacherMenuController as vm'})

      .state('teacher_subject_list', { url: '/teacher/subject/list', templateUrl: 'templates/teacher/subject_list.html', controller: 'TeacherSubjectListController as vm'})
      .state('teacher_subject_add', { url: '/teacher/subject/add', templateUrl: 'templates/subject_add.html', controller: 'SubjectAddController as vm'})
      .state('teacher_subject_edit', { url: '/teacher/subject/edit', templateUrl: 'templates/subject_edit.html', controller: 'SubjectEditController as vm',
                                params: { param: '', }})

      .state('teacher_student_list', { url: '/teacher/student/list', templateUrl: 'templates/item_list.html', controller: 'StudentListController as vm'})
      .state('teacher_student_add', { url: '/teacher/student/add', templateUrl: 'templates/student_add.html', controller: 'StudentAddController as vm'})
      .state('teacher_student_edit', { url: '/teacher/student/edit', templateUrl: 'templates/student_edit.html', controller: 'StudentEditController as vm'})

      .state('homework_list', { url: '/homework_list', templateUrl: 'templates/homework_list.html', controller: 'HomeworkListController as vm'})
      .state('homework_add', { url: '/homework_add', templateUrl: 'templates/homework_add.html', controller: 'HomeworkAddController as vm'})
      .state('homework_sublist', { url: '/homework_sublist', templateUrl: 'templates/homework_sublist.html', controller: 'HomeworkSublistController as vm'})
      .state('homework_send', { url: '/homework_send', templateUrl: 'templates/homework_send.html', controller: 'HomeworkSendController as vm'})

      .state('student_login', { url: '/student/login', templateUrl: 'templates/login.html', controller: 'StudentLoginController as vm'})
      .state('student_register', { url: '/student/register', templateUrl: 'templates/register.html', controller: 'StudentRegisterController as vm'})
      .state('student_menu', { url: '/student/menu', templateUrl: 'templates/menu.html', controller: 'StudentMenuController as vm'})
      .state('student_subject_edit', { url: '/student/subject/edit', templateUrl: 'templates/student/subject_edit.html', controller: 'StudentSubjectEditController as vm'})
      .state('student_homework_confirm', { url: '/student/homework/confirm', templateUrl: 'templates/student/homework_confirm.html', controller: 'HomeworkConfirmController as vm'})
      .state('student_schedule_list', { url: '/student/schedule/list', templateUrl: 'templates/student/schedule_list.html', controller: 'ScheduleListController as vm'})
      .state('student_schedule_add', { url: '/student/schedule/add', templateUrl: 'templates/student/schedule_add.html', controller: 'ScheduleAddController as vm'})
      .state('student_schedule_edit', { url: '/student/schedule/edit', templateUrl: 'templates/student/schedule_add.html', controller: 'ScheduleEditController as vm'})

      .state('parent_login', { url: '/parent/login', templateUrl: 'templates/login.html', controller: 'ParentLoginController as vm'})
      .state('parent_register', { url: '/parent/register', templateUrl: 'templates/register.html', controller: 'ParentRegisterController as vm'})
      .state('parent_menu', { url: '/parent/menu', templateUrl: 'templates/menu.html', controller: 'ParentMenuController as vm'})
      .state('parent_profile', { url: '/parent/profile', templateUrl: 'templates/parent/profile.html', controller: 'ParentProfileController as vm'})
      .state('parent_student_list', { url: '/parent/student/list', templateUrl: 'templates/parent/student_list.html', controller: 'ParentStudentListController as vm'})
      .state('parent_student_add', { url: '/parent/student/add', templateUrl: 'templates/parent/student_add.html', controller: 'ParentStudentAddController as vm'})
      .state('parent_student_edit', { url: '/parent/student/edit', templateUrl: 'templates/parent/student_edit.html', controller: 'ParentStudentEditController as vm'})
      .state('parent_subject_list', { url: '/parent/subject/list', templateUrl: 'templates/parent/subject_list.html', controller: 'ParentSubjectListController as vm'})
      .state('parent_subject_add', { url: '/parent/subject/add', templateUrl: 'templates/parent/subject_add.html', controller: 'ParentSubjectAddController as vm'})
      .state('parent_subject_edit', { url: '/parent/subject/edit', templateUrl: 'templates/parent/subject_edit.html', controller: 'ParentSubjectEditController as vm'})
      .state('parent_homework_confirm', { url: '/parent/homework/confirm', templateUrl: 'templates/student/homework_confirm.html', controller: 'ParentHomeworkConfirmController as vm'})
      .state('parent_schedule_list', { url: '/parent/schedule/list', templateUrl: 'templates/student/schedule_list.html', controller: 'ParentScheduleListController as vm'})
      .state('parent_schedule_add', { url: '/parent/schedule/add', templateUrl: 'templates/student/schedule_add.html', controller: 'ParentScheduleAddController as vm'})
      .state('parent_schedule_edit', { url: '/parent/schedule/edit', templateUrl: 'templates/student/schedule_add.html', controller: 'ParentScheduleEditController as vm'})

      .state('school_login', { url: '/school/login', templateUrl: 'templates/login.html', controller: 'SchoolLoginController as vm'})
      .state('school_menu', { url: '/school/menu', templateUrl: 'templates/menu.html', controller: 'SchoolMenuController as vm'})
      .state('school_class_create', { url: '/school/class/create', templateUrl: 'templates/school/item_add.html', controller: 'SchoolClassAddController as vm'})
      .state('school_subject_create', { url: '/school/subject/create', templateUrl: 'templates/school/item_add.html', controller: 'SchoolSubjectAddController as vm'})
      .state('school_identifier_create', { url: '/school/identifier/create', templateUrl: 'templates/school/item_add.html', controller: 'SchoolIdentifierAddController as vm'})

    $urlRouterProvider.otherwise('/');
  });
