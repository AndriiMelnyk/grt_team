(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    
    function config($stateProvider, $urlRouterProvider) {
        
        var index = {
            name: 'index',
            url: '/',
            templateUrl: './templates/list.html',
            controller: 'IndexController',
            controllerAs: 'vm'
        }

        var photo = {
            name: 'photo',
            url: '/photo',
            templateUrl: './templates/photo.html',
            controller: 'PhotoController',
            controllerAs: 'vm',
            params: {
                'photo': null
            }
        }

        $stateProvider.state(index);
        $stateProvider.state(photo);
        
        $urlRouterProvider.otherwise("/");
    }

})();