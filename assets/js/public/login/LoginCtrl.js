/*global angular*/
angular.module('LoginMod').controller('LoginCtrl',['$scope', '$https','toastr', function($scope, $https, toastr){
	console.log("Login Controller initialized...");
	
	$scope.runLogin = function(){
		$https.put('/login',{
			email: $scope.email,
			password: $scope.password
		}).then(function onSuccess(){
			console.log('Login Passed!');
			window.location = '/dashboard';
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