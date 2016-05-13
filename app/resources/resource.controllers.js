angular.module('app')
    .controller('ResourceCtrl',function($scope, $window){
        $scope.message='this is my Resource Page';
        $scope.rLists =[
          {name: "HTML 5"},
          {name: "CSS Styles"},
          {name: "JavaScript"},
          {name: "AngularJS"}
        ]
        $scope.sourceList=[
          {sourceHTML:"http://www.w3schools.com/tags/default.asp"},
          {sourceHTML:"Blah Blah Blah"},
          {sourceJS:"Mumble Mumble Mumble"},
          {sourceJS:"Bumbles Bounce"}
        ]
});
