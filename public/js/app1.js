var legsorSausages = angular.module('LegsorSausages', []);

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
   },
  {
   name: "image4",
   url: "http://bp.uuuploads.com/hot-dog-legs/hot-dog-legs-3.jpg",
   sausage: false
 },
  {
   name: "image5",
   url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSMaoCU06IZbFKRmY4Q0AbIXoXtvfX0qem0R9E6DKXVpuvie_16yg",
   sausage: false
 },
  {
   name: "image6",
   url: "http://www.radio2.be/sites/default/files/images/carrousel/hotdogs_0.jpg",
   sausage: true
 },
  {
   name: "image7",
   url: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS538VK6Bv0bf6cIfGZVI2TMBkWJfeCy0Jhq61tfCbLc3GalvlD",
   sausage: false
 },
  {
   name: "image8",
   url: "http://i.imgur.com/gJCoeK2.jpg",
   sausage: true
 },
  {
   name: "image9",
   url: "http://i.dailymail.co.uk/i/pix/2013/08/29/article-0-1B821039000005DC-136_306x383.jpg",
   sausage: false
 },
  {
   name: "image10",
   url: "http://www.1023jackfm.com/files/hotdogs-or-legs.jpg",
   sausage: true
 },
  {
   name: "image11",
   url: "http://c1.thejournal.ie/media/2013/08/hot-dog-legs-2-375x500.jpg",
   sausage: true
 },
  {
   name: "image12",
   url: "http://finedininglovers.cdn.crosscast-system.com/ImageAlbum/7306/original_hot.dogs.or.legs.2.png",
   sausage: true
 },
  {
   name: "image13",
   url: "http://i.huffpost.com/gadgets/slideshows/313663/slide_313663_2819356_free.jpg",
   sausage: true
 },
  {
   name: "image14",
   url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3pOfjch2EU8plaKQN4znkwvTz5ek9WCb6RIJEIpJeqpDbsw1UYA",
   sausage: false
 },
  {
   name: "image15",
   url: "http://sickoftheradio.com/wp-content/uploads/2014/03/are-they-hot-dogs-or-legs-tumblr-380x280.jpg",
   sausage: true
 },
  {
   name: "image16",
   url: "http://blogs.ocweekly.com/stickaforkinit/hot-dog-legs-1.jpg",
   sausage: false
 },
  {
   name: "image17",
   url: "http://junkee.com/wp-content/uploads/2013/08/HotDogLegs4.jpg",
   sausage: true
 },
  {
   name: "image18",
   url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYcdnAPJZMMO77NcBN6VSwvO38pPdUfm68vGwEjVNIPkOuCep",
   sausage: true
 },
  {
   name: "image19",
   url: "http://41.media.tumblr.com/3ec6371bb353e65484b6ee1faa15d1ea/tumblr_ms3lwp7hfT1sftuuto1_1280.jpg",
   sausage: false
 },
  {
   name: "image20",
   url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSdywc94Nu1WcGJqG0lMpLgbDel4nUSx4taB8u034tQjw-vuTIp",
   sausage: false
 },
  {
   name: "image21",
   url: "http://40.media.tumblr.com/04837b694c643dc42cf8560aa69a117d/tumblr_n17uf3dbrS1sftuuto1_1280.jpg",
   sausage: false
 },
  {
   name: "image22",
   url: "http://c3.thejournal.ie/media/2013/08/hot-dog-legs-2-2-752x501.jpg",
   sausage: false
 },
  {
   name: "image23",
   url: "http://i.dailymail.co.uk/i/pix/2013/08/29/article-0-1B696A08000005DC-959_306x369.jpg",
   sausage: true
 },
  {
   name: "image24",
   url: "http://thepineappleheads.co.uk/wp-content/uploads/2013/12/IMAG1501.jpg",
   sausage: true
 },
  {
   name: "image25",
   url: "http://exploregram.com/wp-content/uploads/2015/01/@idougahole-%E2%80%94-hot-dogs-or-legs-You-decide.%E2%80%9D-%E2%80%94@EllieGoulding-MiamiBeachEDITION-EllieGoulding-Do.jpg",
   sausage: false
 },
  {
   name: "image26",
   url: "http://pixozu.com/wp-content/uploads/2014/06/1167.jpg",
   sausage: true
 },
  {
   name: "image27",
   url: "http://trendingcurrentevents.com/wp-content/uploads/2014/10/hot-dog-legs-at-the-lake-side.jpg",
   sausage: false
 },
  {
   name: "image28",
   url: "http://thesuaz.files.wordpress.com/2013/08/suazmo_manasquan_hotdogsorlegs.jpeg?w=640&h=640",
   sausage: true
 },
  {
   name: "image29",
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