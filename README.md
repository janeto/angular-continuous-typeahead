AngularJS Continuous Typeahead directive
===============

A simple Angular.js directive wrapper around the Twitter Typeahead library which supports continuous suggestion.

License: [MIT](http://www.opensource.org/licenses/mit-license.php)

Getting Started
---------------

How you acquire angular-continuous-typeahead is up to you.

Preferred method:
* Install with [Bower][bower]: `$ bower install angular-continuous-typeahead`

Other methods:
* Download latest *[dist/angular-continuous-typeahead.js][angular-continuous-typeahead.js]* or *[dist/angular-continuous-typeahead.min.js][angular-continuous-typeahead.min.js]*.

**Note:** angular-typeahead.js has dependencies on the following libraries:
* [typeahead.js][typeahead.js] v0.11.x
* [bloodhound.js][typeahead.js] v0.11.x
* [Angular.js][angularjs]
* [jQuery][jquery] v1.9+

All of which must be loaded before *angular-continuous-typeahead.js*.

Demo
---------------

Please feel free to play with the [Live Demo][livedemo]

Development
---------------

* Install Node.js & Bower modules: `$ npm install`
* Start local web server: `$ npm start` ([http://localhost:8000/examples/][localserver])
* Minify source code and copy to dist folder: `grunt build`

Issues
---------------

Please feel free to add any issues to the GitHub issue tracker.

Usage
---------------

The bare bones:

```html
<head>
    <link rel="stylesheet" href="angular-continuous-typeahead.min.css"/>
</head>

<body ng-controller="MainController">
<input type="text" ng-model="textInput" typeahead="typeaheadSource">

<script type="text/javascript" src="angular.js"></script>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="typeahead.bundle.min.js"></script>
<script type="text/javascript" src="angular-continuous-typeahead.min.js"></script>
</body>
```

```javascript
// Define your own controller somewhere...
var app = angular.module('demoApp', ['angular-continuous-typeahead']);

app.controller('MainController', ['$scope', function ($scope) {
    $scope.typeaheadSource = ['name', 'ip', 'host name', 'sever name'];
}]);
```

<!-- assets -->
[angular-continuous-typeahead.js]: https://raw.github.com/janeto/angular-typeahead/master/dist/angular-typeahead.js
[angular-continuous-typeahead.min.js]: https://raw.github.com/janeto/angular-typeahead/master/dist/angular-typeahead.min.js

<!-- links to third party projects -->
[bower]: http://twitter.github.com/bower/
[jQuery]: http://jquery.com/
[angularjs]: http://angularjs.org/
[typeahead.js]: http://twitter.github.io/typeahead.js/
[livedemo]: http://demo.janeto.com/typeahead/

<!-- dev links -->
[localserver]: http://localhost:8000/examples/

