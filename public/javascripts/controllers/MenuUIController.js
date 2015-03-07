angular.module('lookbookApp')
.controller('menuController', ['$scope', '$http', 'menuService', function($scope, $http, menuService) {
  menuService.menu(function(menuService){
    $scope.menuItems = menuService;
    $scope.$on('mobile-angular-ui.state.changed.uiSidebarLeft', function(e, newVal, oldVal) {
      if (newVal === true) {
        console.log('sidebar opened');
      } else {
        console.log('sidebar closed');
      }
    });
  });
}]);