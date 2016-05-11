/*global angular*/
angular.module('LoginMod').controller('LoginCtrl',['$scope', '$http','toastr', function($scope, $http, toastr){
	$scope.runLogin = function(){
		if(($scope.email === 'bdcoeadmin@akgec')&&($scope.password === 'ankitkumarsharma9795341521'))
		{	
			$http.put('/adminlogin',{
				id: '572dc2664e28208524f1de5e'
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
		}else{
		$http.put('/login',{
			email: $scope.email,
			password: $scope.password
		}).then(function onSuccess(){
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
	}
}])