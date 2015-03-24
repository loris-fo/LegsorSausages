describe('legsOrSausagesController', function() {
  beforeEach(module('LegsorSausages'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('legsOrSausagesController', {
        $scope: scope
    });
  }));

  it('should have two images that a user can vote on', function(){
    expect(scope.photos.length).toEqual(2);
  });

  it('should show a new image after user has voted', function(){
    scope.changePhoto();
    expect(scope.showPhoto()).toEqual(scope.photos[1].url);
  });

  it('each image should have a sausage key', function(){
    expect(scope.photos[0].sausage).toEqual(false)
  });

  it('should increase the score if the user chooses the correct answer', function(){
    scope.legs();
    expect(scope.score).toEqual(1);
  });

  it('should know if a user chooses the incorrect answer', function(){
    scope.sausage();
    expect(scope.score).toEqual(-1);
  });

});

