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

    it("should have a join button", function() {
    expect(browser.isElementPresent(by.id("join_button"))).toBe(true);
  });

  it("should have a log in button", function(){
    expect(browser.isElementPresent(by.id("login_button"))).toBe(true);
  });

});