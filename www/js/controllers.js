angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$localStorage,$log) {

      $localStorage.set('isLogin','true');

      $scope.isLoginFunction= function(){
        if($localStorage.get('isLogin')=='true'){
          return true;
        }else{
          return false;
        }
      }

    })

.controller('SearchCtrl', function($scope,$localStorage,$log,$translate,Categories) {
      $scope.isLogin=$localStorage.get('isLogin');

      $scope.changeIsLogin = function (){
        if($localStorage.get('isLogin')=='true'){
          $localStorage.set('isLogin','false');
          $scope.isLogin=$localStorage.get('isLogin');
        }else{
          $localStorage.set('isLogin','true');
          $scope.isLogin=$localStorage.get('isLogin');
        }

        $log.info($localStorage.get('isLogin'));
      };
        $scope.lang=$translate.use();

        $scope.categories = Categories.all();
})

