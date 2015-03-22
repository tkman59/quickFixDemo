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

    .controller('ModalInfoCtrl', function($scope,$log,$translate,$mdDialog,subCategory) {

        $scope.subCategorySelected=subCategory;
        $scope.lang=$translate.use();
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    })


    .controller('ListCtrl', function($scope,$localStorage,$log,$translate,$mdDialog,$ionicScrollDelegate,Categories) {
        $scope.lang=$translate.use();


    })

        .controller('SearchCtrl', function($scope,$localStorage,$log,$translate,$mdDialog,$ionicScrollDelegate,Categories) {


        $scope.location="A proximiter";

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




        $log.info("test intoSearchCtrl -> " +  navigator.globalization);


        $scope.glob=  (typeof navigator.globalization !== "undefined");
        //navigator.globalization.getPreferredLanguage(function(language) {
        //    $log.info("language2 -> " +  language.value);
        //    $translate.use((language.value.toLowerCase()).split("-")[0]).then(function(data) {
        //        $log.info("SUCCESS2 -> " + data);
        //    }, function(error) {
        //        $log.info("ERROR2 -> " + error);
        //    });
        //}, null);

            $scope.lang=$translate.use();

            $scope.categories = Categories.all();

            $scope.subCategorySelected = undefined;
            $scope.subCategorySelectedRight = undefined;
            $scope.topPx= '0px';

            //$scope.topStyle={'top' : '\''+$scope.topPx + 'px\''};


            $scope.showForm = function(ev,subCategory){
                $scope.subCategorySelectedRight = undefined;
                $log.info(ev);
                // ev.toElement.
                var top= 0;
                top= ev.toElement.offsetTop;
                top=top-25;
                $scope.topPx = ev.toElement.offsetTop-25+ 'px';
                $scope.subCategorySelected = subCategory;
            };

            $scope.showFormRight = function(ev,subCategory){
                $scope.subCategorySelected = undefined;
                $log.info(ev);
                // ev.toElement.
                var top= 0;
                top= ev.toElement.offsetTop;
                top=top-25;
                $scope.topPx = ev.toElement.offsetTop-25+ 'px';
                $scope.subCategorySelectedRight = subCategory;
            };

            $scope.closeForm = function(){
                $scope.subCategorySelected = undefined;
                $scope.subCategorySelectedRight = undefined;
            };


            $scope.showAdvanced = function(ev,subCategory) {
                $mdDialog.show({
                    controller: 'ModalInfoCtrl',
                    templateUrl: 'templates/modal-info.html',
                    targetEvent: ev,
                    subCategory:subCategory

                })
                    .then(function(answer) {
                        $log.info('You said the information was "' + answer + '".');
                    }, function() {
                        $log.info( 'You cancelled the dialog.');
                    });
            };

            $scope.scrollTo = function (id){
                $ionicScrollDelegate.$getByHandle(id).scrollTop();
            };


            $scope.redirect = function(){
                $urlRouterProvider.otherwise("/tab/home");

            };

        })



