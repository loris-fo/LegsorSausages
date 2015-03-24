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
    expect(scope.images.length).toEqual(2);
  });

  it('should show a new image after user has voted', function(){
    // scope.vote();
    expect(scope.images[1].name).toEqual("Photo2")
  });

});