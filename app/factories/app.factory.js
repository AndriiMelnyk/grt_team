(function() {
    'use strict';

    angular
        .module('app')
        .factory('AppFactory', AppFactory);

    AppFactory.$inject = ['$http'];
  
    function AppFactory($http) {
        return {
            getPhotos: function (page) {
                return $http({
                    url: 'https://api.unsplash.com/photos/?client_id=4ba42d1a885f39b7ad9ac842d95b44664427bc7cea5ef0ee098be47b487f4cd0', 
                    method: "GET",
                    params: {
                        page: page || 1,
                        per_page: 10
                    }
                });
            }
        };
    }

})();