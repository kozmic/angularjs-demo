'use strict';

// Based on http://docs.angularjs.org/guide/forms
function ValidationCtrl($scope) {
    $scope.master= {};

    $scope.update = function(user) {
        $scope.master= angular.copy(user);
    };

    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

    $scope.isUnchanged = function(user) {
        return angular.equals(user, $scope.master);
    };

    $scope.reset();
}