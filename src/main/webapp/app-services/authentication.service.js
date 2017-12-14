(function () {
    'use strict';

    angular
            .module('app')
            .factory('AuthenticationService', Service);

    function Service($http, $localStorage) {
        var service = {};

        service.Login = Login;
        service.Logout = Logout;

        return service;

        function Login(user, pass, callback) {

            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            axios.defaults.headers.common['key'] = 'arduboxkey';

            var params = new URLSearchParams();
            params.append('username', user);
            params.append('password', CryptoJS.SHA512(pass));
            
            axios.post('api/auth', params)
                    .then(function (response) {
                        $localStorage.currentUser = {username: response.data.username, token: response.data.token};
                        console.log($localStorage.currentUser);
                        axios.defaults.headers.common['token'] = response.data.token;
                        callback(true);
                    })
                    .catch(function (error) {
                        console.log(error);
                        callback(false);
                    });
        }

        function Logout() {
            // remove user from local storage and clear http auth header
            delete $localStorage.currentUser;
        }
    }
})();