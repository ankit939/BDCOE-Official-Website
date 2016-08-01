angular.module('DashMod').controller('DashCtrl',['$scope', '$http','$uibModal', '$log', function($scope, $http, $uibModal, $log, toastr){
  function getUser(){
    $http.get('/getuser')
    .then(function onSuccess(user){
     if(user.data.studno == '0')
      user.data.studno = '';
      
     if(user.data.univno == '0')
      user.data.univno = '';
    
     if(user.data.mobileno == '0')
      user.data.mobileno = '';
      
      $scope.user = user.data;
    })
    .catch(function onError(err){
      console.log(err);
    })
  };
  getUser();
  
    //Modal Controls
  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'modal.html',
      controller: 'ModalCtrl',
      size: size,
      scope: $scope,
      http: $http,
      toastr: toastr,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
}]);

angular.module('DashMod').controller('ModalCtrl',  function ($scope, $http, $uibModalInstance, items, toastr) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };
  
  $scope.interests = [
    {
    name: 'Software Development',
    value: $scope.user.softdev
    }, 
    {
      name: 'Web Development',
      value: $scope.user.webdev},
     {
       name: 'Android Development',
       value: $scope.user.androiddev},
     {
       name: 'Data Analytics',
       value: $scope.user.dataanalytics},
     {
       name: 'Designing',
       value: $scope.user.designing},
     { 
       name: 'Cloud Computing',
       value: $scope.user.cloudcomp},
     {
       name: 'Artificial Intelligence',
       value: $scope.user.artificialint},
     {
       name: 'Others',
       value: $scope.user.others
     }
    ];
    
    $scope.profileEdit = function(){
     var yr = $scope.year;
      if(yr === '1'){
        yr = yr + 'st year';
      }
      else
      if(yr === '2'){
        yr = yr + 'nd year';
      }
      else
      if(yr === '3'){
        yr = yr + 'rd year';
      }
      else
        yr = yr + 'th year';
      
    //Submit To Sails Server
        $http.post('/createprofile', {
                studno: $scope.studno,
                univno: $scope.univno,
                branch: $scope.branch,
                section: $scope.section,
                year: yr,
                mobileno: $scope.mobileno,
                softdev: $scope.interests[0].value,
                webdev: $scope.interests[1].value,
                androiddev: $scope.interests[2].value,
                dataanalytics: $scope.interests[3].value,
                designing: $scope.interests[4].value,
                cloudcomp: $scope.interests[5].value,
                artificialint: $scope.interests[6].value,
                others: $scope.interests[7].value
        })
    .then(function onSuccess(response){
      toastr.success('All the details are saved.','Profile is Updated!', {
          closeButton:true
        });
        $uibModalInstance.dismiss('cancel');
        window.location.reload(true);
    })
    .catch(function onError(err){
      toastr.error('There is some error, try after some time.','Error!', {
          closeButton:true
        })
    })
    }
    
    $scope.updateAccount = function(){
    $http.post('/account', {
      email: $scope.user.email,
      newemail: $scope.newemail,
      password: $scope.oldpassword,
      newpassword: $scope.newpassword
    })
    .then(function onSuccess(response){
      toastr.success('All requested details are updated.','Account Settings are Updated!', {
          closeButton:true
        });
        $uibModalInstance.dismiss('cancel');
        window.location.reload(true);
    })
    .catch(function onError(err){
      toastr.error('There is some error, try after some time.','Error!', {
          closeButton:true
        })
    })
    }
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});