angular.module('lookbookApp').factory('menuService', ['$http', function($http){
  return {
    menu: function(callback){
      $http.get('/api/getMenuItems').success(callback);
    }
  }
}])