/*global angular*/
angular.module("HomeMod",['ngRoute','ngAnimate','toastr'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: '/templates/home.ejs'
  })
  .when('/what_we_do', {
    templateUrl: '/templates/what_we_do.ejs'
  })
  .when('/portfolio', {
    templateUrl: '/templates/portfolio.ejs'
  })
  .when('/news', {
    templateUrl: '/templates/news.ejs'
  })
  .when('/about_us', {
    templateUrl: '/templates/about_us.ejs',
    controller: 'aboutCtrl'
  })
  .when('/contact_us', {
    templateUrl: '/templates/contact_us.ejs'
  })
  .otherwise({
            redirectTo: '/#/'
        });
})

.controller('aboutCtrl', function ($scope, $https){
        $https.get('/json/members.json').success(function(data) {
          $scope.members = data;
        });
      });

