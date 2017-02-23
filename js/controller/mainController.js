(function (){
	angular.module('escapeRoomApp').controller('mainController', ['$scope', '$window', function($scope, $window) {

				$scope.showAction = 0;

	}]);

	  angular.module('escapeRoomApp').directive("signInForm", function (){
	    return {
	      restrict: 'E',
	      templateUrl:"view/templates/sign-in-form.html",
	      controller:function(){

	      },
	      controllerAs: 'signInForm'
	    };
	  });

		angular.module('escapeRoomApp').directive("gameReviewsForm", function (){
			return {
				restrict: 'E',
				templateUrl:"view/templates/game-reviews-form.html",
				controller:function(){

				},
				controllerAs: 'gameReviewsForm'
			};
		});


		angular.module('escapeRoomApp').directive("gameReservationForm", function (){
			return {
				restrict: 'E',
				templateUrl:"view/templates/game-reservation-form.html",
				controller:function(){

				},
				controllerAs: 'gameReservationForm'
			};
		});

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
