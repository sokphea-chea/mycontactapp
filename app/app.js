'use strict';

// Declare app level module which depends on views, and components
angular.module('myContacts', [
  'ngRoute',
  "firebase",
  "myContacts.contacts"
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
