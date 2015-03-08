angular.module('lookbookApp')
.controller('womenworkController', ['$scope', '$http', 'womenworkService', function($scope, $http, womenworkService) {
  womenworkService.womenWork(function(womenworkService){
    $scope.workItems = womenworkService;
  });
}]);
angular.module('lookbookApp')
.controller('menworkController', ['$scope', '$http', 'menworkService', function($scope, $http, menworkService) {
  menworkService.menWork(function(menworkService){
    $scope.menWorkItems = menworkService;
  });
}]);
