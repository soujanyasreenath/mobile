angular.module('lookbookApp', ['ngRoute', 'mobile-angular-ui'])
.config(function($routeProvider) {
  // You can configure ngRoute as always, but to take advantage of SharedState location
  // feature (i.e. close sidebar on backbutton) you should setup 'reloadOnSearch: false' 
  // in order to avoid unwanted routing.
  $routeProvider.when('/', {
      templateUrl: '/templates/home.html',
      reloadOnSearch: false
    }).when('/home', {
      templateUrl: '/templates/home.html',
      reloadOnSearch: false
    }).when('/women', {
      templateUrl: '/templates/women/index.html',
      reloadOnSearch: false
    }).when('/men', {
      templateUrl: '/templates/men/index.html',
      reloadOnSearch: false
    }).when('/women-work', {
      templateUrl: '/templates/women/work-wear.html',
      reloadOnSearch: false
    }).when('/men-work', {
      templateUrl: '/templates/men/work-wear.html',
      reloadOnSearch: false
    }).when('/women-party', {
      templateUrl: '/templates/women/work-wear.html',
      reloadOnSearch: false
    }).when('/men-party', {
      templateUrl: '/templates/men/work-wear.html',
      reloadOnSearch: false
    }).when('/women-casual', {
      templateUrl: '/templates/women/work-wear.html',
      reloadOnSearch: false
    }).when('/men-casual', {
      templateUrl: '/templates/men/work-wear.html',
      reloadOnSearch: false
    });
});