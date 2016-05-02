angular.module('DashMod').controller('DashCtrl',['$scope', '$http','$uibModal', '$log', function($scope, $http, $uibModal, $log, toastr){
  function getUser(){
    $http.get('/getuser')
    .then(function onSuccess(user){
      $scope.user = user.data;
    })
    .catch(function onError(err){
      console.log(err);
    })
  };
  function getProfile(){
    $http.get('/getprofile')
    .then(function onSuccess(profile){
      $scope.profile = profile.data;
    })
    .catch(function onError(err){
      console.log(err);
    })
  };
   getUser();
   getProfile();
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
    'Software Development', 
    'Web Development',
     'Android App Development',
     'Data Analytics',
     'Designing',
     'Cloud Computing',
     'Artificial Intelligence',
     'Others'
    ];

    $scope.intlist = [
      'false',
      'false',
      'false',
      'true',
      'false',
      'false',
      'false',
      'false',
    ]

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
    //Submit To sails Server
        $http.post('/createprofile', {
                email: $scope.user.email,
                studno: $scope.studno,
                univno: $scope.univno,
                branch: $scope.branch,
                section: $scope.section,
                year: yr,
                mobileno: $scope.mobileno,
                softdev: $scope.softdev,
                webdev: $scope.webdev,
                androiddev: $scope.androiddev,
                dataanalytics: $scope.dataanalytics,
                designing: $scope.designing,
                cloudcomp: $scope.cloudcomp,
                artificialint: $scope.artificialint,
                others: $scope.others
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

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});