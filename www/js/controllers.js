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

        $scope.showDate = function (){
            var options = {
                date: new Date(),
                mode: 'time'
            };

            datePicker.show(options, function(date){
                alert("date result " + date);
            });
        };



        $scope.lang=$translate.use();

        $scope.categories = Categories.all();

        $scope.subCategorySelected = $scope.categories[1].subCategories[1];

        $ionicModal.fromTemplateUrl('templates/modal-info.html', {
            scope: $scope,
            info: $scope.info,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal
        },function(reason){
          $log.info('==>'+reason);
        });

        $scope.openModal = function(info) {
            $scope.info = info;
            $scope.modal.show()
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });



})

