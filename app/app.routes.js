angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'home/home.html',
                controller:"HomeCtrl"
            })
          //  .state('about',{
          //      url:'/about',
          //      templateUrl:'about/about.html',
          //      controller:"AboutCtrl"
          //  });
    });
