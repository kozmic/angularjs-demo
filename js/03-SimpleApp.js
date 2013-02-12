'use strict';

var SimpleApp = angular.module('SimpleApp', ['ngSanitize', 'simpleFilters']).
    // Routes populates ng-view:
    config(function ($routeProvider) {
        $routeProvider.
            when('/', {template: '<a class="btn btn-success">{{title}}</a>'})

    })

var SimpleCtrl = function ($scope) {

    $scope.title = "SimpleCtrl fantastic title";
    $scope.footer = "Source code is available at https://github.com/kozmic/angularjs-demo/ ";

    $scope.people = [
        {name: 'Jøran Lillesand', age: 28, tronder: true},
        {name: 'Ståle Pettersen', age: 29, tronder: false},
        {name: 'Ola Nordmann', age: 50, tronder: false }
    ];

    $scope.addPerson = function() {
        $scope.people.push({name: $scope.name, age: parseInt($scope.age, 10), tronder: false});
        $scope.name = "";
        $scope.age = "";
    };

    $scope.deletePerson = function (person) {
        $scope.people.splice($scope.people.indexOf(person), 1);
    };

};

//SimpleCtrl.$inject = ['$scope'];


/* Filters */

angular.module('simpleFilters', []).

    filter('tronder', function () {
        return function (input) {
            return input ? '\u0CA0\uFB5B\u0CA0' : '\u0CA0\u005F\u0CA0';
        };
    });
