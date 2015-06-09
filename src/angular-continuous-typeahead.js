'use strict';

var angularTypeahead = angular.module('angular-continuous-typeahead', []);

angularTypeahead.directive('typeahead', function () {
    return {
        restrict: 'A',
        scope: {
            suggestionSource: '=typeahead'
        },
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            var suggestionEngine;

            function updateModel(event) {
                if (ngModel) {
                    var newPickedValue = $(event.target).val();
                    var modelValue = ngModel.$modelValue;
                    var value = modelValue.substring(0, modelValue.lastIndexOf(extractor(modelValue, modelValue.length))) + newPickedValue;

                    $(element).typeahead('val', value);
                    scope.$apply(function () {
                        ngModel.$setViewValue(value);
                    });
                }
            }

            function getCaretPosition(inputElement) {
                var caretPos = 0;

                if (document.selection) { // IE Support
                    inputElement.focus();
                    var sel = document.selection.createRange();
                    sel.moveStart('character', -inputElement.value.length);
                    caretPos = sel.text.length;
                } else if (inputElement.selectionStart || inputElement.selectionStart == '0') { // Firefox support
                    caretPos = inputElement.selectionStart;
                }

                return caretPos;
            }

            function extractor(query, caretStart) {
                query = query.substring(0, caretStart).substring(query.lastIndexOf(' '));

                var result = /([\w]+)$/.exec(query);
                if (result && result[1]) {
                    return result[1].trim();
                }

                return '';
            }

            suggestionEngine = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.whitespace,
                queryTokenizer: function (query) {
                    return Bloodhound.tokenizers.whitespace(extractor(query, getCaretPosition(element[0])));
                },
                local: scope.suggestionSource
            });

            suggestionEngine.initialize();

            $(element).typeahead({
                    highlight: true
                },
                {
                    name: 'suggestions',
                    displayKey: function (datum) {
                        return datum;
                    },
                    source: suggestionEngine.ttAdapter()
                });

            $(element).on('typeahead:select', function (event, datum, dataset) {
                updateModel(event);
            });

            $(element).on('typeahead:autocomplete', function (event, datum, dataset) {
                updateModel(event);
            });

            $(element).on('typeahead:cursorchange', function (event, datum, dataset) {
                // Temporarily append new content to text box
                if (ngModel && datum) {
                    var modelValue = ngModel.$modelValue;
                    $(event.target).val(modelValue.substring(0, modelValue.lastIndexOf(extractor(modelValue, modelValue.length))) + datum);
                }
            });

            scope.$watchCollection('suggestionSource', function () {
                suggestionEngine.initialize(true);
            });

            scope.$on('$destroy', function () {
                $(element).typeahead('destroy');
            });
        }
    };
});