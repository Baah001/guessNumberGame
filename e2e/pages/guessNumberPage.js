require('../util/customlocators');
var jsonData = require('../json/OR.json');

var myGuessNumberPage = function () {

  this.passSelectedNumber = function () {
    //running out of time, having a hard time sending keys to input range
    element(by.id('guessGameSlider')).click();
    element(by.id('guessGameSlider')).sendKeys(2);

    element(by.partialButtonText('Submit number')).click();



    browser.sleep(2000);

  };

  this.getSelectedType = function(){
    element(by.id('panel-body')).getText().then(function(text){
    expect(text).toBe('Please select a number');
    })
  }


};

module.exports = new myGuessNumberPage();
