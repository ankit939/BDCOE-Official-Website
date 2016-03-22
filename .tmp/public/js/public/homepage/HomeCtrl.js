/*global angular*/
angular.module('HomeMod').controller('HomeCtrl',['$scope', '$http','toastr', function($scope, $http, toastr){
	$scope.data= true;
	$scope.foundation = true;
	$scope.sendfeedback = function(){
          $scope.feedemail = " ";
          $scope.feedmsg = " "; 
          toastr.success('Thanks for your feedback','Feedback Successfully Sent', {
              closeButton:true
              })
         }
}])