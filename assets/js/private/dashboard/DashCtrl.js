angular.module('DashMod').controller('DashCtrl',['$scope', '$https', function($scope, $https){
	$scope.getUser = function(){
		console.log('Getting User...');
		
		$https.get('/getuser')
		.then(function onSuccess(user){
			$scope.user = user.data;
		})
		.catch(function onError(err){
			console.log(err);
		})
	}
}])