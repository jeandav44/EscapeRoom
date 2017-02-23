(function (){
  angular.module('escapeRoomApp').controller('signInController', ['$scope', '$window', function($scope, $window) {
    //Properties
		$scope.signIn = new signInObj();
    $scope.signIn.setGender("Man");

    //Scope variables
    $scope.genders= ["Man", "Woman"];


    this.submit = function () {
			console.log($scope.signIn);

			$scope.signIn = new signInObj();
			$scope.signInForm.$setPristine();
			$scope.$parent.showAction = 0;
		};

  }]);

})();
