angular.module('AdminMod').controller('AdminCtrl',['$scope', '$http','$uibModal', '$log', function($scope, $http, $uibModal, $log, toastr){
  function getAllUsers(){
    $http.get('/getallusers')
    .then(function onSuccess(user){
      $scope.students = user.data;
    })
    .catch(function onError(err){
      console.log(err);
    })
  };
  getAllUsers();
}]);

