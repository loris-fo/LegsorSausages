var legsorSausages = angular.module('LegsorSausages', ['ngResource']);

legsorSausages.controller('legsOrSausagesController', function($scope, $http) {

    $http.get('/images')
    .success(function(data) {
      $scope.photos = data;
      // console.log(data[i].image);
    });

  var i = 0;

  $scope.score = 0;
  $scope.view = 0;
  
  $scope.showPhoto = function(){
    return $scope.photos[i].image 
  //   if($scope.photos.length > i){
  //   return $scope.photos[i].image;
  // }else{
  //   return "http://bavatuesdays.com/files/2014/12/Game_Over.png"
  // }
  };

  $scope.changePhoto = function(){
    i += 1;
   };

   $scope.reset = function(){
    i = 0;
   };

   $scope.sausage = function(){
    if($scope.photos[i].sausage === true){
      $scope.score +=1;
    }else{
      $scope.score -=1;
    }
    $scope.changePhoto();
   };

   $scope.legs = function(){
    if($scope.photos[i].sausage === false){
      $scope.score +=1;
    }else{
      $scope.score -=1;
    }
    $scope.changePhoto();
   };

   legsorSausages.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

});