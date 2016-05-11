/*global angular*/
angular.module('HomeMod').controller('HomeCtrl',['$scope', '$http','toastr', function($scope, $http, toastr){
	$scope.data= true;
	$scope.foundation = true;
	
	$scope.runfeedback = function(){
		 
	}
	
	$scope.runAdmin = function(){
		$http.put('/adminlogin',{
			username: $scope.username,
			password: $scope.userpassword
		}).then(function onSuccess(){
			window.location = '/admin';
		}).catch(function OnError(err){
			if(err.status == 400 || 404){
				toastr.error('Invalid Credentials','Error', {
					closeButton:true
				})
				return;	
			}
			toastr.error('An error has occured, please try again later', 'Error', {
				closeButton:true
			});
			return;
		})
	}
}])