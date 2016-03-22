/*global angular*/
angular.module('SignupMod').controller('SignupCtrl',['$scope', '$https','toastr', function($scope, $https, toastr){
	$scope.runSignup = function(){
		console.log("Signing Up"+ $scope.firstname);
		
		//Submit To sails Server
		$https.post('/signup', {
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