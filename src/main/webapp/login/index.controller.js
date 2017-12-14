(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', Controller);

    function Controller($location, AuthenticationService) {
        var vm = this;

        vm.login = login;

        initController();

        function initController() {
            // reset login status
            AuthenticationService.Logout();
        };

        function login() {
            vm.loading = true;
            AuthenticationService.Login(vm.username, vm.password
            , function (result) {
                if (result) {
                    console.log("Resultado OK");
                    $location.path('/');
                    window.location = '#/';
                } else {
                    Materialize.toast('Usuário ou senha inválidos.', 3000);
                    vm.loading = false;
                    window.location = '#/';
                }
            });
        };
    }

})();