angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
        // DUE TO SOME ERRORS, THE FOLLOWING IS CONSIDERED THE HOMEPAGE.
        // WHEN CHANGING NAME OF FILES & CONTROLERS, CODE BREAKS
            .state('about',{
                url:'/home',
                templateUrl:'about/about.html',
                controller:"AboutCtrl"
            })
            .state('resource',{
                url:'/resources',
                templateUrl:'resources/resource.html',
                controller:"ResourceCtrl"
            });
            //.state('contact',{
            //  url:'/contact',
            //  templateUrl:'contact.contact.html',
            //  controller:"ContacCtrl"
            //});



    });
