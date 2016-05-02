angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('DirectoryCtrl', function($scope, Categories) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.categories = Categories.all();
  $scope.remove = function(category) {
    Categories.remove(category);
  };
})

.controller('DirectoryDetailCtrl', function($scope, $stateParams, Categories) {
  $scope.category = Categories.get($stateParams.categoryId);
})

.controller('ZoneCtrl', function($scope) {
 
})

.controller('BussinessDetailCtrl', function($scope, $stateParams, Categories) {
  
})

.controller('ContactCtrl', function($scope, $http, $state) {
  $scope.formData = {};

  $scope.submit = function(){
    $http({
      method : 'POST',
      url    : 'http://2me.app/api/sendEmail.php',
      data   : $scope.formData,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(data){
      if(data.errors){
        $scope.errorName = data.errors.name;
        $scope.errorEmail = data.errors.email;
      } else {
        $scope.message = data.message;
        $scope.formData = "";
        $state.go('tab.contact');
      }
    });
  };
})

.controller('MagazzineCtrl', function($scope) {
  $scope.swiper = {};
 
    $scope.onReadySwiper = function (swiper) {
 
        swiper.on('slideChangeStart', function () {
            console.log('slide start');
        });
         
        swiper.on('onSlideChangeEnd', function () {
            console.log('slide end');
        }); 
    };
});
