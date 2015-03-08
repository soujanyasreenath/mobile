angular.module('lookbookApp').directive('modalOverlay', [
    '$rootElement',
    function($rootElement) {
      return {
        restrict: 'C',
        link: function(scope, elem) {
          $rootElement.addClass('has-modal-overlay');
          elem.on('$destroy', function(){
            $rootElement.removeClass('has-modal-overlay');
          });
          scope.$on('$destroy', function(){
            $rootElement.removeClass('has-modal-overlay');
          });
        }
      };
  }]);