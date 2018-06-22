var usalcoin = angular.module('usalcoin', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router', 'md.data.table',
    'ngResource']);

(function(app) {

    app.constant('_',
        window._
    );

    app.config(['$stateProvider', '$urlRouterProvider', '$qProvider', function($stateProvider, $urlRouterProvider, $qProvider, $http) {

        $qProvider.errorOnUnhandledRejections(false);

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'partials/home.html',
            controller: 'HomeController',

        })

        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'LoginController',
        })


    }]);

    app.controller('AppCtrl', function ($scope, $mdMedia, $mdSidenav, $state, _) {
        $scope.currentNavItem = "home";

        $scope.$mdMedia = $mdMedia;

        $scope.$mdSidenav = $mdSidenav;

        $scope.isInState = function isInState(sref) {
            return $state.includes(sref);
        };

        $scope.openSidebar = function() {
            $scope.$mdSidenav('left').toggle();
        };

        $scope.closeSidebar = function() {
            $scope.$mdSidenav('left').close();
        };

        $scope.isSidebarOpen = function() {
            return $scope.$mdSidenav('left').isOpen();
        };

        $scope.goTo = function(state){
            $state.go(state);
        }
        
        $scope.findTitle = function () {
            var titleObj = _.findWhere(titles, {state: $state.current.name});
            return (titleObj) ? titleObj.title : '';
        }
    })

    .directive('mainToolbar', function() {
        return {
            replace: true,
            restrict: 'E',
            transclude: true,
            templateUrl: 'partials/main.toolbar.html',
            scope: { 'crumbs': '=' },

            controller: function($scope, $rootScope, $mdSidenav, $mdMedia, $state) {

                $scope.$mdMedia = $mdMedia;

                $scope.$mdSidenav = $mdSidenav;

                $scope.openSidebar = function() {
                    $scope.$mdSidenav('left').toggle();
                };

                $scope.closeSidebar = function() {
                    $scope.$mdSidenav('left').close();
                };

                $scope.isSidebarOpen = function() {
                    return $scope.$mdSidenav('left').isOpen();
                };

            }
        };
    });


})(usalcoin);
