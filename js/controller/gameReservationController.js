(function (){
  angular.module('escapeRoomApp').controller('gameReservationController', ['$scope', '$window', function($scope, $window) {


  }]);
  
  angular.module('escapeRoomApp').directive("gameReservationForm", function (){
    return {
      restrict: 'E',
      templateUrl:"view/templates/game-reservation-form.html",
      controller:function(){

      },
      controllerAs: 'gameReservationForm'
    };
  });

})();
