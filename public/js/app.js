var legsorSausages = angular.module('LegsorSausages', ['ngResource']);

legsorSausages.controller('legsOrSausagesController', function($scope) {

  var i = 0;
  // var score = 0;
  $scope.score = 0;

  $scope.view = 0;
  $scope.photos = [{
    name: "image1",
    url: "http://blogs.ocweekly.com/stickaforkinit/hot-dog-legs-2.jpg",
    sausage: false
  },
    {
    name: "image2",
    url: "http://i8.cdnds.net/13/34/450x450/tumblr_mrfiwmaqqj1sftuuto1_500.jpg",
    sausage: true
  }]

  $scope.showPhoto = function(){
    return $scope.photos[i].url;

  };

  $scope.changePhoto = function(){
    i += 1;
   };

   $scope.sausage = function(){
    if($scope.photos[i].sausage === true){
      $scope.score +=1;
    }else{
      $scope.score -=1;
    }
   };

   $scope.legs = function(){
    if($scope.photos[i].sausage === false){
      $scope.score +=1;
    }else{
      $scope.score -=1;
    }
    $scope.changePhoto();
   };

});