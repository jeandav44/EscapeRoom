(function (){
  angular.module('escapeRoomApp').controller('signInController', ['$scope', '$window', function($scope, $window) {


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
  
})();
