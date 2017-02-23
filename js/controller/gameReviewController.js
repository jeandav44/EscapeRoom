(function (){
  angular.module('escapeRoomApp').controller('gameReviewController', ['$scope', '$window', function($scope, $window) {


  }]);
  
  angular.module('escapeRoomApp').directive("gameReviewsForm", function (){
    return {
      restrict: 'E',
      templateUrl:"view/templates/game-reviews-form.html",
      controller:function(){

      },
      controllerAs: 'gameReviewsForm'
    };
  });

})();
