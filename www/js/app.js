// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ksSwiper'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider){
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.navBar.alignTitle('center');
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.directory', {
      url: '/directory',
      views: {
        'tab-directory': {
          templateUrl: 'templates/tab-directory.html',
          controller: 'DirectoryCtrl'
        }
      }
    })
  .state('tab.directory-detail', {
      url: '/directory/:categoryId',
      views: {
        'tab-directory': {
          templateUrl: 'templates/directory-detail.html',
          controller: 'DirectoryDetailCtrl'
        }
      }
    })

  .state('tab.detail', {
      url: '/detail',
      views: {
        'tab-directory': {
          templateUrl: 'templates/details.html',
          controller: 'BussinessDetailCtrl'
        }
      }
    })

  .state('tab.zones', {
      url: '/zones',
      views: {
        'tab-zones': {
          templateUrl: 'templates/tab-zones.html',
        }
      }
    })

  .state('tab.magazzine', {
    url: '/magazzine',
    views: {
      'tab-zones': {
        templateUrl: 'templates/tab-magazzine.html',
        controller: 'MagazzineCtrl'
      }
    }
  })

  .state('sendEmail', {
    url: '/sendEmail'
  })
  
  .state('tab.contact', {
    url: '/contact',
    views: {
      'tab-contact': {
        templateUrl: 'templates/tab-contact.html',
        controller: 'ContactCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
