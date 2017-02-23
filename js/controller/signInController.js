(function (){
  angular.module('escapeRoomApp').controller('signInController', ['$scope', '$window', function($scope, $window) {
      //Properties
      $scope.signIn = new signInObj();


      this.submit = function () {
        console.log($scope.signIn);

        $scope.signIn = new signInObj();
        $scope.signInForm.$setPristine();
        $scope.$parent.showAction = 0;
      };


  }]);

})();
