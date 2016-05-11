angular.module('DashMod', ['ngRoute','ngAnimate','ui.bootstrap','toastr','ngMaterial','ngMessages'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: '/templates/profile.ejs',
  })
  .when('/workshops', {
    templateUrl: '/templates/workshops.ejs'
  })
  .when('/online_events', {
    templateUrl: '/templates/online_events.ejs'
  })
  .when('/account_settings', {
    templateUrl: '/templates/account_settings.ejs'
  })
  .when('/ask_FAQs', {
    templateUrl: '/templates/ask_FAQs.ejs'
  })
  .otherwise({
            redirectTo: '/'
        });

})

