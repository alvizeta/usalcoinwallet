(function(app) {

    app.controller('LoginController', function($scope, $resource, $rootScope, _, $state, $mdToast) {

        $rootScope.logged = false;

        $scope.showSimpleToast = function(text) {

            $mdToast.show(
                $mdToast.simple()
                    .textContent(text)
                    .hideDelay(3000)
            );
        };

        $scope.verify = function(){

            var userFound = _.findWhere(allowedLogins, { username: $scope.email});
            if(userFound){
                if(userFound.password === $scope.password){
                    $rootScope.logged = true;
                    $scope.showSimpleToast('Login Successful');
                    $state.go('home');
                }
            }else{
                $scope.showSimpleToast('DENIED');
            }
        }

        var allowedLogins = [
            {
                username: 'a.zorzini@usal.edu.ar',
                password: 'asdasd123',
                address: 'e9a3b3f0aecbec241686fa0d1ba85a5d673ab813af80d5596934499820f01e27'
            },
            {
                username: 'gonzacannone@usal.edu.ar',
                password: 'asdasd123',
                address: '3e7038dc7054a0725aafcac20c6826341a1456031346aea8ba7104413375f0fc'
            },
            {
                username: 'lucas.asd@usal.edu.ar',
                password: 'asdasd123',
                address: '7d2554d7b4d0bad0937f29d455e3f727dc7b71a20396be8d3e91639ac8a3793d'
            },
            {
                username: 'gervasio.barraco@usal.edu.ar',
                password: '123456',
                address: '7d2554d7b4d0bad0937f29d455e3f727dc7b71a20396be8d3e91639ac8a3793e'
            }

        ]

    });

})(usalcoin);
