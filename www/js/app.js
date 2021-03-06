// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.utils', 'starter.services','starter.controllers','pascalprecht.translate','ngMaterial','ion-google-place'])

.run(function($ionicPlatform, $translate,$log) {
  $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }

      $log.info("test -> " +  navigator.globalization);

      if(typeof navigator.globalization !== "undefined") {
          navigator.globalization.getPreferredLanguage(function(language) {
              $log.info("language -> " +  language.value);
              $translate.use((language.value.toLowerCase()).split("-")[0]).then(function(data) {
                  $log.info("SUCCESS -> " + data);
              }, function(error) {
                  $log.info("ERROR -> " + error);
              });
          }, null);
      }else{
          $log.info("undefined -> ");
      }
  });


})

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
      $translateProvider.translations('en', {
            beauty: "Beauty",
            wellness: "Wellness",
            health: "Health",
            description: "Description",
            close:'Close'

      });
      $translateProvider.translations('fr', {
          beauty: "Beauté",
          wellness: "Bien-être",
          health: "Santé",
          description: "Description",
          close:'Fermer'
      });
      $translateProvider.preferredLanguage("en");
      $translateProvider.fallbackLanguage("en");

      $stateProvider.state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
      })

        .state('app.search', {
          url: "/search",
          views: {
            'menuContent': {
              templateUrl: "templates/search.html",
              controller: 'SearchCtrl'
            }
          }
        })


          .state('app.list', {
              url: "/list",
              views: {
                  'menuContent': {
                      templateUrl: "templates/list.html",
                      controller: 'ListCtrl'
                  }
              }
          })

          ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
