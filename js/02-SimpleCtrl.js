'use strict';

function SimpleCtrl($scope) {
    $scope.name = 'Ståle Pettersen';
    $scope.visible = true;

    $scope.toggleVisibility = function () {
        $scope.visible = !$scope.visible;

    };
}
