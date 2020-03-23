// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular
  .module('chargesApp',['ionic'])
    .run(function($ionicPlatform) {
            // ...
    })
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('charges', {
          url: '/charges',
          templateUrl: 'templates/charges.html',
          controller: 'ChargesController',
          controllerAs: 'charges',
          cache: false,
        })
        .state('charge-detail', {
          url: '/charge-detail/:id',
          templateUrl: 'templates/charge-detail.html',
          controller: 'ChargeDetailController',
          controllerAs: 'chargeDetail'
        })
        .state('charge-create', {
          url: '/charge-create',
          templateUrl: 'templates/charge-create.html',
          controller: 'ChargeCreateController',
          controllerAs: 'chargeCreate'
        })
        .state('charge-update', {
          url: '/charge-update/:id',
          templateUrl: 'templates/charge-update.html',
          controller: 'ChargeUpdateController',
          controllerAs: 'chargeUpdate'
        });
        $urlRouterProvider.otherwise('/charges');
    });