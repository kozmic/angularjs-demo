angular.module('SimpleApp', []).
    // Routes populates ng-view:
    config(function($routeProvider) {
        $routeProvider.
            when('/', {template: '<a class="btn btn-success">{{title}}</a>'})

    })
;

var SimpleCtrl = function ($scope) {
    $scope.title = "SimpleCtrl fantastic title";

    $scope.people = [
        {name: 'Jøran Lillesand', age: 28},
        {name: 'Ståle Pettersen', age: 20},
        {name: 'Ola Nordmann', age: 50}
    ];
}


