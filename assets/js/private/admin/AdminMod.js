angular.module('AdminMod', ['ngRoute','ngAnimate','ui.bootstrap','toastr'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/registered_students', {
    templateUrl: '/templates/registered_students.ejs'
  })
  .when('/workshop_applied_students', {
    templateUrl: '/templates/workshop_applied_students.ejs'
    
  })
  .when('/online_event_applied_students', {
    templateUrl: '/templates/online_event_applied_students.ejs'
  })
  .when('/send_emails', {
    templateUrl: '/templates/send_emails.ejs'
  })
  .when('/answer_faq', {
    templateUrl: '/templates/answer_faq.ejs'
  })
  .otherwise({
            redirectTo: '/registered_students'
        });

})

