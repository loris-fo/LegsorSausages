var legsorSausages = angular.module('LegsorSausages', ['ngTouch']);

legsorSausages.controller('legsOrSausagesController', function($scope) {

  $scope.greeting = "hello";

  var i = 0;

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
  },
  {
    name: "image3",
    url: "https://40.media.tumblr.com/9441faef3cd5be727c2bc189255975df/tumblr_nkj4a1epoC1rzg2epo1_500.jpg",
    sausage: true
   }]

  $scope.showPhoto = function(){
    if($scope.photos.length > i){
    return $scope.photos[i].url;
  }else{
    return "http://bavatuesdays.com/files/2014/12/Game_Over.png"
  }
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

});