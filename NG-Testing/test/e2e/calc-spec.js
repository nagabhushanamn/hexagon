/**
 * http://usejsdoc.org/
 */

describe('Protractor Demo App', function() {
  

	 it('should have a title', function() {
		browser.get('http://127.0.0.1:8080/NG-Testing');
		expect(browser.getTitle()).toEqual('Super Calculator');
	});
 

	 it('should add one and two', function() {
		browser.get('http://127.0.0.1:8080/NG-Testing');
		element(by.model('first')).sendKeys(1);
		element(by.model('second')).sendKeys(2);

		element(by.id('gobutton')).click();

		expect(element(by.binding('latest')).getText()).toEqual('3'); // This is wrong!
	});
  
});