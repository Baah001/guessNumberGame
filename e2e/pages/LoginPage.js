require('../util/customlocators');
var jsonData = require('../json/OR.json');

var myLoginPage = function () {

  this.loginUser = function () {
    element(by.id('loginPage')).click();

  };

  this.passUserDetails = function () {
    element(by.id('loginEmail')).sendKeys('testEmail@test.com');
    element(by.id('loginPassword')).sendKeys('testPassword');
    element(by.partialButtonText('Sub')).click();
  };

};

module.exports = new myLoginPage();
