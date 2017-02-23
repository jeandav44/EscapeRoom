(function (){
  angular.module('escapeRoomApp').controller('addGameController', ['$scope', '$window', function($scope, $window) {


  }]);
  
  angular.module('escapeRoomApp').directive("addGameForm", function (){
    return {
      restrict: 'E',
      templateUrl:"view/templates/add-game-form.html",
      controller:function(){

      },
      controllerAs: 'addGameForm'
    };
  });

})();
