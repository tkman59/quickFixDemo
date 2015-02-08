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

.controller('SearchCtrl', function($scope,$localStorage,$log,$translate,$ionicModal ,Categories) {
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

        $scope.subCategorySelected = $scope.categories[1].subCategories[1];

        $scope.modal = $ionicModal;
        $ionicModal.fromTemplateUrl('modal-info.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hidden', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });


})

