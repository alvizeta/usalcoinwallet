(function(app) {

	app.controller('HomeController', function($scope, $resource, $state, $rootScope, $mdSidenav, _, $mdDialog) {

        //$rootScope.logged = true;

        if(!$rootScope.logged){
            $state.go('login');
		}else{
            $mdSidenav('left').open();
		}


        $scope.sendDialog = function (ev) {

            $scope.showDetails(ev);
        };

        $scope.showDetails = function (ev) {
            $mdDialog.show({
                templateUrl: 'partials/sendDialog.html',
                targetEvent: ev,
                clickOutsideToClose: true,
                controller: 'SendDialogController',
                escapeToClose: true,
                locals: {},
                focusOnOpen: true
            }).then(function () {

                $scope.showSimpleToast("Component Added");

            });

        };

        $scope.requestDialog = function (ev) {

            $scope.showRequestDialog(ev);
        };

        $scope.showRequestDialog = function (ev) {
            $mdDialog.show({
                templateUrl: 'partials/requestDialog.html',
                targetEvent: ev,
                clickOutsideToClose: true,
                controller: 'RequestDialogController',
                escapeToClose: true,
                locals: {},
                focusOnOpen: true
            }).then(function () {

                $scope.showSimpleToast("Component Added");

            });

        };

	});

    app.controller('SendDialogController', function($scope, $mdDialog) {

        $scope.saveComponent = function saveComponent() {
            $mdDialog.hide();
        };

        $scope.closeDialog = function () {
            $mdDialog.cancel();
        };

    });

    app.controller('RequestDialogController', function($scope, $mdDialog) {

        $scope.saveComponent = function saveComponent() {
            $mdDialog.hide();
        };

        $scope.closeDialog = function () {
            $mdDialog.cancel();
        };

    });

})(usalcoin);
