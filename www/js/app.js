// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.speakers', {
    url: '/speakers',
    views: {
      'menuContent': {
        templateUrl: 'templates/speakers.html',
        controller: 'SpeakerCtrl'
      }
    }
  })

  .state('app.workshops', {
    url: '/workshops',
    views: {
      'menuContent': {
        templateUrl: 'templates/workshops.html',
        controller: 'WorkshopCtrl'
      }
    }
  })
  
  .state('app.hackathon', {
    url: '/hackathon',
    views: {
      'menuContent': {
        templateUrl: 'templates/hackathon.html',
        controller: 'HackathonCtrl'
      }
    }
  })

  .state('app.sponsors', {
    url: '/sponsors',
    views: {
      'menuContent': {
        templateUrl: 'templates/sponsors.html',
        controller: 'SponsorCtrl'
      }
    }
  })

  .state('app.speaker_detail', {
    url: '/speakers/:speakerId',
    views: {
      'menuContent': {
        templateUrl: 'templates/speaker.html',
        controller: 'SpeakerCtrl'
      }
    }
  })

  .state('app.workshop_detail', {
    url: '/workshops/:workshopId',
    views: {
      'menuContent': {
        templateUrl: 'templates/workshop.html',
        controller: 'WorkshopCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/speakers');
});
