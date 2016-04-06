angular.module('myApp')

.controller('mainController', function($scope){


  $scope.first = true;
  $scope.last = true;

  $scope.toggle=function(){
    if($scope.showme && $scope.tryagain){
      $scope.showme=false;
      $scope.tryagain=false;
      $scope.firstname='';
      $scope.lastname=''
      $scope.first =true;
      $scope.last =true;
    }else if($scope.video){
      $scope.showme=false;
      $scope.tryagain=false;
      $scope.video=!$scope.video;
      $scope.firstname='';
      $scope.lastname=''
      $scope.first =true;
      $scope.last =true;
    }else{
      $scope.showme=true;
      $scope.tryagain=true;
      $scope.first =false;
      $scope.last =false;
      
    }
  }
});