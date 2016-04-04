angular.module('myApp')

.config(function($routeProvider, $httpProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'main.html',
    controller: 'mainController'
  })
})