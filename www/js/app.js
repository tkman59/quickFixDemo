// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.utils', 'starter.services','starter.controllers','pascalprecht.translate'])

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

      if(typeof navigator.globalization !== "undefined") {
          navigator.globalization.getPreferredLanguage(function(language) {
              $translate.use((language.value).split("-")[0]).then(function(data) {
                  $log.info("SUCCESS -> " + data);
              }, function(error) {
                  $log.info("ERROR -> " + error);
              });
          }, null);
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
          .state('app.beauty', {
              url: "/beauty",
              views: {
                  'menuContent': {
                      templateUrl: "templates/search-beauty.html"

                  }
              }
          })
          ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
