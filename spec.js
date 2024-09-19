const { browser } = require("protractor");

describe('Google Search Test', function() {
    it('should search for "Protractor"', function() {
      browser.get('https://www.google.com');

      // Find the search box element by name and send input
      var searchBox = element(by.name('q'));
      searchBox.sendKeys('Protractor');
      
      // Submit the search form
      searchBox.submit();
      
      // Wait for the search results page to load and check the title
      browser.waitForAngularEnabled(false); // since google.com is not an Angular site
      expect(browser.getTitle()).toContain('Protractor');
    });
  });


// describe('Google Search Test', function() {
//     it('should have a title', function() {
//       browser.get('https://www.google.com');
//       expect(browser.getTitle()).toEqual('Google');
//     });
//   });