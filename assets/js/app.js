
var angularApp = angular.module('angularApp',['ngAnimate']);

angularApp.run([
    function () {
      console.log("hello world");
    }]);
angularApp.controller('formControl', function($http, $scope) {
// create a message to display in our view
$scope.submitting = false;
$scope.submitForm = function ()  {
  if ($scope.messageForm.$valid) {
    $scope.submitting = true;
    setTimeout(function () {
      $scope.submitting = false;
      console.log($scope.message);
      $scope.message = null;
      $scope.submitSuccess = true;
      $scope.$apply();
      console.log("valid");
      setTimeout(function () {
        $scope.submitSuccess = false;
        $scope.$apply();

      }, 3000);
    }, 1000);
  }
}

});
