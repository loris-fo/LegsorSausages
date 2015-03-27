describe('legsOrSausagesController', function() {
  beforeEach(module('LegsorSausages'));

  var httpBackend, scope, ctrl;

  beforeEach(inject(function($rootScope, $controller, $httpBackend, $http) {
    httpBackend = $httpBackend;
    httpBackend.when("GET", "/images").respond([{id: 1, image: '/images/image1.jpg', sausage: false}, {id: 2, image: '/images/image2.jpg', sausage: true}]);
    scope = $rootScope.$new();
    ctrl = $controller('legsOrSausagesController', {
        $scope: scope,
        $http: $http
    });
  }));



  describe('initialisation settings', function(){

    it('each image should have a sausage key', function(){
      httpBackend.flush();
      expect(scope.photos[0].sausage).toEqual(false);
    });

    it('each image should have an image url', function(){
      httpBackend.flush();
      expect(scope.photos[0].image).toEqual('/images/image1.jpg');
    });


    it('each image should have an id', function(){
      httpBackend.flush();
      expect(scope.photos[0].id).toEqual(1);
    });

    it('should have two images that a user can vote on', function(){
      httpBackend.flush();
      expect(scope.photos.length).toEqual(2);
    });

  });


  describe('game settings', function(){

    it('should show a new image after user has voted', function(){
      httpBackend.flush();
      scope.changePhoto();
      expect(scope.showPhoto()).toEqual(scope.photos[1].image);
    });

    it('should increase the score if the user chooses the correct answer', function(){
      httpBackend.flush();
      scope.legs();
      expect(scope.score).toEqual(1);
    });

    it('should decrease the score if the user chooses the incorrect answer', function(){
      httpBackend.flush();
      scope.sausage();
      expect(scope.score).toEqual(-1);
    });

  });

});

