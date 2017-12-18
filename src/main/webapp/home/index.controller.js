(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', Controller);

    function Controller($localStorage) {
        var vm = this;

        initController();

        function initController() {
            vm.usuario = $localStorage.currentUser;
        }
        
    }

})();