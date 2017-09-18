'use strict';

let I, basePage

module.exports = {

  _init() {
    I = require('../steps_file.js')()
    basePage = require('../base/BasePage')
  },

  // insert your locators and methods here
  elements: {
    loginLink: "//li[@class='loginUser']",
  },

  waitForClearButtonVisibility() {
    basePage.waitForElementVisibility(this.elements.loginLink)
  },

  gotoLogin() {
    I.click(this.elements.loginLink)
  }

}