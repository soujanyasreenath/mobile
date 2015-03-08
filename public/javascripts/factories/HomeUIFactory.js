angular.module('lookbookApp').factory('womenworkService', ['$http', function($http){
  return {
    womenWork: function(callback){
      $http.get('/api/getWorkItems').success(callback);
    }
  }
}]);
angular.module('lookbookApp').factory('menworkService', ['$http', function($http){
  return {
    menWork: function(callback){
      $http.get('/api/getMenWorkItems').success(callback);
    }
  }
}]);