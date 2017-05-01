(function() {
    'use strict';

    angular
        .module('app')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['AppFactory', '$state'];
  
    function IndexController(AppFactory, $state) {
        var vm = this;
        
        vm.totalItems = 100;
        vm.currentPage = 1;

        vm.changePage = function() {
            getPhotos();
        };
        
        vm.getPhotoDetails = function(photo) {
            $state.go('photo', {'photo': photo});
        }
        
        vm.formatDate = function(date) {
            return moment(date).format('LLL');
        }
        
        function getPhotos() {
            AppFactory.getPhotos(vm.currentPage).then(function(response){
                vm.photos = response.data;
            })
        }
        
        // init call
        getPhotos();
    }

})();