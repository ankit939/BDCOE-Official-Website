angular.module('DashMod', ['ngRoute','ngAnimate','ui.bootstrap','toastr'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: '/templates/profile.ejs',
  })
  .when('/online_events', {
    templateUrl: '/templates/online_events.ejs'
  })
  .when('/account_settings', {
    templateUrl: '/templates/account_settings.ejs'
  })
  .when('/help', {
    templateUrl: '/templates/help.ejs'
  })
  .otherwise({
            redirectTo: '/'
        });

})

