angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.api_url = 'http://localhost:8000'

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.factory('Sponsors', function() {
  return {
    all: function() {
      // var projectString = window.localStorage['projects'];
      // if(projectString) {
         // return angular.fromJson(projectString);
      // }
      return [];
    },
    save: function(projects) {
      // window.localStorage['projects'] = angular.toJson(projects);
    },
    new: function(jsonObject) {
      //Crear a new project
      var object = angular.fromJson(jsonObject);
      object.logo = 'http://localhost:8000' + object.logo;
      return object;
    }
  }
})

.factory('Speakers', function() {
  return {
    all: function() {
      // var projectString = window.localStorage['projects'];
      // if(projectString) {
         // return angular.fromJson(projectString);
      // }
      return [];
    },
    save: function(projects) {
      // window.localStorage['projects'] = angular.toJson(projects);
    },
    new: function(jsonObject) {
      //Crear a new project
      var object = angular.fromJson(jsonObject);
      object.profile_picture = 'http://localhost:8000' + object.profile_picture;
      return object;
    }
  }
})

.factory('HackTeams', function() {
  return {
    all: function() {
      // var projectString = window.localStorage['projects'];
      // if(projectString) {
         // return angular.fromJson(projectString);
      // }
      return [];
    },
    save: function(projects) {
      // window.localStorage['projects'] = angular.toJson(projects);
    },
    new: function(jsonObject) {
      //Crear a new project
      var object = angular.fromJson(jsonObject);
      object.team_picture = 'http://localhost:8000' + object.team_picture;
      return object;
    }
  }
})

.factory('Workshops', function() {
  return {
    all: function() {
      // var projectString = window.localStorage['projects'];
      // if(projectString) {
         // return angular.fromJson(projectString);
      // }
      return [];
    },
    save: function(projects) {
      // window.localStorage['projects'] = angular.toJson(projects);
    },
    new: function(jsonObject) {
      //Crear a new project
      var object = angular.fromJson(jsonObject);
      object.profile_picture = 'http://localhost:8000' + object.profile_picture;
      return object;
    }
  }
})

.controller('SpeakerCtrl', function($scope, $ionicLoading, $http, Speakers) {
  $scope.speakers = [];
  var url = $scope.api_url + '/speakers/';
  console.log(url);

  // TODO: Enviar esto dentro del factory
  $http.get(url)
    .success(function(response) {
      console.log(response);
      angular.forEach(response, function(object){
        var speaker = Speakers.new(object);
        $scope.speakers.push(speaker);
      });
    })
    .error(function(response) {
      console.log(response);
    });

})

.controller('SpeakerCtrl', function($scope, $stateParams, $ionicLoading,  $http, Speakers) {
  $scope.speaker = null;
})

.controller('WorkshopCtrl', function($scope, $ionicLoading, $http, Workshops) {
  $scope.workshops = [];

})

.controller('WorkshopCtrl', function($scope, $stateParams, $ionicLoading, Workshops) {
})

.controller('HackathonCtrl', function($scope, $ionicLoading, $http, HackTeams) {
  $scope.teams = [];
  var url = $scope.api_url + '/teams/';

  // TODO: Enviar esto dentro del factory
  $http.get(url)
    .success(function(response) {
      angular.forEach(response, function(object){
        var team = HackTeams.new(object);
        $scope.teams.push(team);
      });
    })
    .error(function(response) {
      console.log(response);
    });
})

.controller('SponsorCtrl', function($scope, $ionicLoading, $http, Sponsors) {
  $scope.sponsors = [];
  var url = $scope.api_url + '/sponsors/';
  // TODO: Enviar esto dentro del factory
  $http.get(url)
    .success(function(response) {
      angular.forEach(response, function(object){
        var sponsor = Sponsors.new(object);
        $scope.sponsors.push(sponsor);
      });
    })
    .error(function(response) {
      console.log(response);
    });

});