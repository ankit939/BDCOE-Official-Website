/*global angular*/
angular.module('SignupMod').controller('SignupCtrl',['$scope', '$http','toastr', function($scope, $http, toastr){
	console.log("Signup Controller initialized...");
	$scope.runSignup = function(){
		console.log("Signing Up"+ $scope.firstname);
		
		//Submit To sails Server
		$http.post('/signup', {
			firstname: $scope.firstname,
			lastname: $scope.lastname,
			email: $scope.email,
			password: $scope.password
		})
		.then(function onSuccess(response){
			toastr.success('Now login your account','Registered Successfully', {
					closeButton:true
				})
		})
		.catch(function onError(err){
			toastr.error('Already Registered','Error', {
					closeButton:true
				})
			console.log('Error: ' + err );

		})
	}
}])