angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ZoneCtrl', function($scope) {
 
})

.controller('ContactCtrl', function($scope, $http, $state) {
  $scope.formData = {};

  $scope.submit = function(){
    $http({
      method : 'POST',
      url    : 'http://2me.app/www/sendEmail.php',
      data   : $scope.formData,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
    .success(function(data){
      if(data.errors){
        $scope.errorName = data.errors.name;
        $scope.errorEmail = data.errors.email;
      } else {
        $scope.message = data.message;
        $state.go('list');
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
