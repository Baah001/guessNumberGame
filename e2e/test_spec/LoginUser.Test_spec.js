
var login_page = require('../pages/LoginPage');
var jsonData = require('../json/OR.json');

describe('Testing user login functionality', function () {

  it('Log user into application', function () {
    login_page.loginUser();
    login_page.passUserDetails();
  });

});
