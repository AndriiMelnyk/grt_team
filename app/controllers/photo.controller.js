(function() {
    'use strict';

    angular
        .module('app')
        .controller('PhotoController', PhotoController);

    PhotoController.$inject = ['$stateParams', '$state'];
  
    function PhotoController($stateParams, $state) {
        var vm = this;
        
        vm.photo = $stateParams.photo;
        
        if (!vm.photo) {
            $state.go('index');
        }
        
    }

})();