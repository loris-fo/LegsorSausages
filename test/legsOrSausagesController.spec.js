describe('legsOrSausagesController', function() {
  beforeEach(module('LegsorSausages'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('legsOrSausagesController', {
        $scope: scope
    });
  }));
});