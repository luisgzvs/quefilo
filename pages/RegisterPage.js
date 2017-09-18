'use strict';

let I, basePage

module.exports = {

  _init() {
    I = require('../steps_file.js')()
    basePage = require('../base/BasePage')
  },

  // insert your locators and methods here
  elements: {
    pageTitle: '.box_name'
  },

  waitFortitleVisibility() {
    basePage.waitForElementVisibility(this.elements.pageTitle)
  },

  register(){
      console.log('good')
  }

}