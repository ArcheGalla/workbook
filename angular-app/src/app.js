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
    .constants('testConst', 123)
	.service('a_service', function(testConst) {
		this.grit = function() {
			console.log('Hello I am service of module A');
		}
	})
    .config(function(testConst) {
        console.log('This is config block of module B');
    })
    .run(function(a_service) {
        console.log('This is run block module B', a_service);

    });

angular
    .module('app', ['ngCookies', 'A'])
    .component('appRoot', {
        template: '<h2>Hola</h2>',
        controller: ['$rootScope', '$http','a_service', function(f, s, s) {
			console.log('This is root component controller', a_service);

			$http.get('/api/test').then(res => console.log(res))

		}
		]    })
    .config(function(a_serviceProviedr) {
        console.log('This is config block of module M');
    })
    .run(function() {
        console.log('This is run block of module M');
    });

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app'])
});
