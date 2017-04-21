
var guessNumber_page = require('../pages/guessNumberPage');
var jsonData = require('../json/OR.json');

describe('Testing the guess number game', function () {

  it('send attempts', function () {
    guessNumber_page.passSelectedNumber();
    guessNumber_page.getSelectedType();
    browser.sleep(3000);

  });

});
