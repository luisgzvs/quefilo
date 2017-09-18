'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')()
  },

  // insert your locators and methods here
  waitForElementVisibility(element){
     I.waitForVisible(element, 60)
  }

}