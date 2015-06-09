'use strict';

var app = angular.module('demoApp', ['angular-typeahead']);

app.controller('MainController', ['$scope', function ($scope) {
    $scope.typeaheadSource = ['name', 'ip', 'host name', 'sever name'];

    $scope.addSuggestionItem = function () {
        if ($scope.newItem && $scope.newItem.trim()) {
            $scope.typeaheadSource.push($scope.newItem.trim());
            $scope.newItem = '';
        }
    };
}]);
