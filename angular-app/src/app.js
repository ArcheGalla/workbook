import angular from "angular";
import cookie from "angular-cookies";

angular
    .module('A', ['B'])
    .service('a_service', function() {
        this.grit = function() {
            console.log('Hello I am service of module A');
        }
    })
    .config(function() {
        console.log('This is config block of module A');
    })
    .run(function() {
        console.log('This is run block module A');
    });

angular
    .module('B', [])
    .config(function() {
        console.log('This is config block of module B');
    })
    .run(function() {
        console.log('This is run block module B');
    });

angular
    .module('app', ['ngCookies', 'A'])
    .component('appRoot', {
        template: '<h2>Hola</h2>',
        controller: function($rootScope, $http) {
            console.log('This is root component controller');

            $http.get('/api/test').then(res => console.log(res))

        }
    })
    .config(function() {
        console.log('This is config block of module M');
    })
    .run(function() {
        console.log('This is run block of module M');
    });

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app'])
});
