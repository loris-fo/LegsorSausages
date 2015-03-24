describe('todoApp homepage', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Legs or Sausages');
  });

  it("should have an image", function() {
    expect(browser.isElementPresent(by.id("main_image"))).toBe(true);
  });

    it("should have a legs button", function() {
    expect(browser.isElementPresent(by.id("legs_button"))).toBe(true);
  });

  it("should have a sausages button", function(){
    expect(browser.isElementPresent(by.id("sausages_button"))).toBe(true);
  });

  it('should display a score', function(){
    expect(browser.isElementPresent(by.id("score"))).toBe(true);
  });

});